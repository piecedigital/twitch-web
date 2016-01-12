var React = require("react"),
	jsx = require("react-jsx"),
	fs = require("fs"),
	read = fs.readFileSync,

	path = {
		join() {
			var arr = [];
			for(var i = 0; i < arguments.length; i++) {
				arr.push(arguments[i]);
			}
			return arr.join("/");
		}
	};
// get parent document/layout
var indexLayout = jsx.server(read(path.join(__dirname, '../views/index.jsx'), 'utf-8'), {raw:true,filename:"index.jsx",debug:true});

module.exports = {
	getDocument(docName, renderData = {}) {
		// get page layout
		var childPage = this.getPage(docName, "server");

		var RenderDocument = React.createClass({
			render: function render() {
				return childPage({ props : renderData });
			}
		});
		
		var renderObjectData = {
			RenderDocument: RenderDocument,
			title: "Hello World",
			streamer: "foo bar"
		};

		for(var key in renderData) {
			renderObjectData[key] = renderData[key];
		}

		this.renderJS(docName, renderData);

		return indexLayout(renderObjectData, { html : true });
	},
	renderJS(docName, renderData) {
		var clientJS = `${ this.getPage(docName, "client").toString() }`
		
		//console.log(jsx.server(clientJS))

		// saved child jsx page to a file to be used client-side
		var parentBuild = this.reactViewTemplate(renderData,clientJS);

		fs.writeFile(`${__dirname}/../public/js/client-react-parent.js`, parentBuild);
	},
	getPage(docName, type) {
		// gets any jsx page (docName) for "client" or "server" use (type)
		return jsx[type](read(path.join(__dirname, `../views/${docName}.jsx`), 'utf-8'), {filename:docName,debug:true}, {ecma:"es5"});
	},

	reactViewTemplate(objectData, pageData) {
		return `var RenderDocument = React.createClass({
	displayName: "RenderDocument",

	getInistialState: function() {
		return ${JSON.stringify(objectData)};
	}
	render: function render() {
		return React.createElement( DocumentChild, this.state );
	}
});

var DocumentChild = React.createClass({
	displayName: "RenderDocument",

	sendMessage: function() {
		window.open("http://www.twitch.tv/message/compose?to=jooygirl", "_blank");
	};
	render: function render() {
		return (${pageData}(this))
	}
});

ReactDOM.render(React.createElement(RenderDocument, null), document.querySelector("#render-document"));
`;
	}
}
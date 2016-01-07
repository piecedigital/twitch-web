var RenderDocument = React.createClass({
	displayName: "RenderDocument",

	render: function render() {
		return React.createElement( DocumentChild, {"title":"PieceDigital | Twitch Web","streamer":"PieceDigital"} );
	}
});

var DocumentChild = React.createClass({
	displayName: "RenderDocument",
	getInistialState: function() {
		return this.props;
	},
	render: function render() {
		return (function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement("h1", null, "Hello ", React.createElement("span", null, this.props.streamer)
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZXIiLCJzb3VyY2VzIjpbInN0cmVhbWVyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsUUFBQSxFQUFNLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFnQixDQUFBO0FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiPGgxPkhlbGxvXHQ8c3Bhbj57dGhpcy5wcm9wcy5zdHJlYW1lcn08L3NwYW4+XHJcbjwvaDE+Il19
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return React[options.render](nodes);
}(this))
	}
});

ReactDOM.render(React.createElement(RenderDocument, null), document.querySelector("#render-document"));

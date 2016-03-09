var React = require("react"),
	jsx = require("react-jsx"),
	fs = require("fs"),
	read = fs.readFileSync,
	http = {
		http: require("http"),
		https: require("https")
	},
	path = require("path"),
	CSGenerator = require("./client-script-generator");
console.log(process.env)
try {
	config = require("./config");
} catch (e) {
	if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
		if(!process.env["twitchClientKey"] || !process.env["twitchSecrectKey"]) {
			throw console.error(new Error("twitchClientKey or twitchSecrectKey don't exist"));
		};

		config = {
			twitchClientKey: process.env["twitchClientKey"],
			twitchSecrectKey: process.env["twitchSecrectKey"]
		};
	} else {
		throw e;
	};
};

var ajax = function(obj) {
	var hostname = obj.url.match(/(www)?([\w\d\-\_]*\.)?([\w\d\-\_]*[\.\:]{1,})([\w\d\-\_]*)(\.[\w\d\-\_]*)?/gi).join(""),
		pathname = obj.url.replace(/(www)?([\w\d\-\_]*\.)?([\w\d\-\_]*\.)([\w\d\-\_]*)(\.[\w\d\-\_]*)?/gi, "");

	var contentTypes = {
    json: "application/json",
    text: "text/plain"
  }

	var options = {
	  hostname: hostname || "",
	  path: pathname,
	  method: obj.type || "GET",
	  headers: {
	    'Content-Type': contentTypes[obj.dataType] || "text/plain"//,
	    //'Content-Length': postData.length
	  }
	};

	var fullChunks = "";

	var req = http[obj.connType || "http"].request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  //console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    //console.log('BODY: ' + chunk);
	    fullChunks += chunk;
	  });
	  res.on('end', function() {
	    console.log('No more data in response.');
	    //console.log(fullChunks);

	    obj[(res.statusCode < 400) ? "success" : "error"](fullChunks);
	  })
	});
	req.end();

	req.on('error', function(e) {
  	console.log('problem with request:', e);
	});
};

// get parent document/layout
var indexLayout = jsx.server(read(path.join(__dirname, '../views/index.jsx'), 'utf-8'), {raw:true,filename:"index.jsx",debug:true});

module.exports = {
	getDocument(docName, renderData, callback) {
		renderData = renderData || {};

		var proceed = function (data) {
			// console.log(data)
			// get page layout
			var childPage = this.getPage(docName, "server");

			var RenderDocument = React.createClass({
				render: function render() {
					return childPage({ props : { state : data }, state : { panelOpen : false } });
				}
			});

			var renderObjectData = {
				RenderDocument: RenderDocument,
				title: "Hello World",
				streamer: "foo bar"
			};

			renderObjectData.title = `${data.userData.display_name} | Twitch Web`;
			renderObjectData.streamer = data.userData.display_name;

			this.renderJS(docName, data);

			callback(indexLayout(renderObjectData, { html : true }))
		}.bind(this);

		var ajaxDataCollection = {
			callsToMake: 5,
			callsMade: 0,
			finish() {
				if(this.callsMade === this.callsToMake) {
					proceed({
						userData: this.userData,
						channelData: this.channelData,
						panelData: this.panelData,
						streamData: this.streamData,
						videoData: this.videoData
					});
				}
			},
			getUserData() {
				var self = this;
				ajax({
					connType: "https",
					url: `api.twitch.tv/kraken/users/${renderData.streamer}`,
					dataType: "json",
					success: function(userData) {
						//console.log("success", data);
						self.userData = JSON.parse(userData);
						self.callsMade += 1;
						self.finish();
					},
					error: function(data) {
						console.log("error", data);
					}
				})
			},
			getChannelData() {
				var self = this;
				ajax({
					connType: "https",
					url: `api.twitch.tv/kraken/channels/${renderData.streamer}`,
					dataType: "json",
					success: function(channelData) {
						//console.log("success", data);
						self.channelData = JSON.parse(channelData);
						self.callsMade += 1;
						self.finish();
					},
					error: function(data) {
						console.log("error", data);
					}
				})
			},
			getPanelData() {
				var self = this;
				ajax({
					connType: "https",
					url: `api.twitch.tv/api/channels/${renderData.streamer}/panels`,
					dataType: "json",
					success: function(panelData) {
						//console.log("success", data);
						self.panelData = JSON.parse(panelData);
						self.callsMade += 1;
						self.finish();
					},
					error: function(data) {
						console.log("error", data);
					}
				})
			},
			getStreamData() {
				var self = this;
				ajax({
					connType: "https",
					url: `api.twitch.tv/kraken/streams/${renderData.streamer}`,
					dataType: "json",
					success: function(streamData) {
						//console.log("success", data);
						self.streamData = JSON.parse(streamData);
						self.callsMade += 1;
						self.finish();
					},
					error: function(data) {
						console.log("error", data);
					}
				})
			},
			getVideoData() {
				var self = this;
				ajax({
					connType: "https",
					url: `api.twitch.tv/kraken/channels/${renderData.streamer}/videos?limit=10&broadcasts=true`,
					dataType: "json",
					success: function(videoData) {
						//console.log("success", data);
						self.videoData = JSON.parse(videoData);
						self.callsMade += 1;
						self.finish();
					},
					error: function(data) {
						console.log("error", data);
					}
				})
			},
			callAllOnce() {
				this.getUserData();
				this.getChannelData();
				this.getPanelData();
				this.getStreamData();
				this.getVideoData();
			}
		};

		ajaxDataCollection.callAllOnce();
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
		return jsx[type](read(path.join(__dirname, `../views/${docName}.jsx`), 'utf-8'), {filename:docName,debug:false,ecma:"es5"});
	},

	reactViewTemplate(renderData, pageData) {
		return CSGenerator(renderData, pageData, config);
	}
}

// embed videos
// <iframe src="http://player.twitch.tv/?video=v36999728" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/twitch?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from Twitch on www.twitch.tv</a>

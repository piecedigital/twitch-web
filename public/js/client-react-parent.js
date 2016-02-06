var RenderDocument = React.createClass({
	displayName: "RenderDocument",

	getInitialState: function() {
		return {"userData":{"display_name":"PieceDigital","_id":83101325,"name":"piecedigital","type":"user","bio":"Full-stack web developer, experience in building responsive websites and web apps using the Node server runtime. When I'm not programming I'm probably playing video games like League of Legends.","created_at":"2015-02-19T03:19:45Z","updated_at":"2016-02-03T22:50:54Z","logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_image-19ef151d5e81e1ed-300x300.png","_links":{"self":"https://api.twitch.tv/kraken/users/piecedigital"}},"channelData":{"mature":false,"status":"Bashing this Tori chick (Toribash)","broadcaster_language":"en","display_name":"PieceDigital","game":"Toribash: Violence Perfected","language":"en","_id":83101325,"name":"piecedigital","created_at":"2015-02-19T03:19:45Z","updated_at":"2016-02-03T22:50:54Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_image-19ef151d5e81e1ed-300x300.png","banner":null,"video_banner":null,"background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_banner-5bea98f42e9179b8-480.png","profile_banner_background_color":null,"partner":false,"url":"http://www.twitch.tv/piecedigital","views":370,"followers":11,"_links":{"self":"https://api.twitch.tv/kraken/channels/piecedigital","follows":"https://api.twitch.tv/kraken/channels/piecedigital/follows","commercial":"https://api.twitch.tv/kraken/channels/piecedigital/commercial","stream_key":"https://api.twitch.tv/kraken/channels/piecedigital/stream_key","chat":"https://api.twitch.tv/kraken/chat/piecedigital","features":"https://api.twitch.tv/kraken/channels/piecedigital/features","subscriptions":"https://api.twitch.tv/kraken/channels/piecedigital/subscriptions","editors":"https://api.twitch.tv/kraken/channels/piecedigital/editors","teams":"https://api.twitch.tv/kraken/channels/piecedigital/teams","videos":"https://api.twitch.tv/kraken/channels/piecedigital/videos"}},"panelData":[{"_id":4333167,"display_order":1,"kind":"default","html_description":"<p>I'm a full-stack web developer.</p>\n\n<p>I use the MERN-stack.</p>\n\n<p>Click to visit my <a href=\"http://piecedigital.github.io\">website</a>.</p>\n\n<p>I'm open for work.</p>\n","user_id":83101325,"data":{"link":"http://piecedigital.github.io","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-3edc065014a32fa4-320.png","title":"Website","description":"I'm a full-stack web developer.\n\nI use the MERN-stack.\n\nClick to visit my [website](http://piecedigital.github.io).\n\nI'm open for work."},"channel":"piecedigital"},{"_id":4332623,"display_order":2,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://twitter.com/piecedigital","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-086b4fb924f41e72-320.png","title":"Twitter"},"channel":"piecedigital"},{"_id":4332631,"display_order":3,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://instagram.com/piecedigitalstudios","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-c1ef7720cc0004b9-320.png","title":"Instagram"},"channel":"piecedigital"},{"_id":4332647,"display_order":4,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://youtube.com/thepreygrigade","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-9767cf22e011eb88-320.png","title":"YouTube"},"channel":"piecedigital"},{"_id":8723933,"display_order":5,"kind":"default","html_description":"<p>no link test</p>\n","user_id":83101325,"data":{"link":"","image":"","title":"","description":"no link test"},"channel":"piecedigital"}],"streamData":{"stream":null,"_links":{"self":"https://api.twitch.tv/kraken/streams/piecedigital","channel":"https://api.twitch.tv/kraken/channels/piecedigital"}},"videoData":{"_total":0,"_links":{"self":"https://api.twitch.tv/kraken/channels/piecedigital/videos?limit=10&offset=0&user=piecedigital","next":"https://api.twitch.tv/kraken/channels/piecedigital/videos?limit=10&offset=10&user=piecedigital"},"videos":[]}};
	},
	render: function render() {
		console.log(this.state)
		return React.createElement( DocumentChild, this.state );
	}
});

var DocumentChild = React.createClass({
	displayName: "RenderDocument",

	sendMessage: function() {
		window.open("http://www.twitch.tv/message/compose?to=PieceDigital", "_blank");
	},
	followChannel: function() {
		console.log("true stuff");
	},
	render: function render() {
		return (function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement("div", {id: "render-document", className: "| rgb-text-40_40_40"}, 

  React.createElement("div", {"data-test": console.log(this.props), className: "page | page-wrap-1600 pos-relative left-pad-22_0 right-pad-1_0 y-pad-1_0"}, 

  	React.createElement("div", {className: "side-panel | pos-absolute pos-top-1_0 pos-left-1_0 width-20_0 x-pad-1_0 y-pad-1_0 border-radius-1_0 rgb-bg-220_240_250"}, 
      React.createElement("div", {className: "profile-image | img-contain x-pad-1_0 parent"}, 
        React.createElement("div", {className: " | x-pad-0_5 y-pad-0_5 border-radius-0_8 rgb-bg-100_200_250"}, 
          React.createElement("img", {className: " | display-block border-radius-0_5", src: this.props.userData.logo}), 
          React.createElement("div", {className: "channel-status | center-justify col-2"}, 
            React.createElement("h3", {className: "unset top-marg-0_5 rgb-text-240_250_250"}, "Offline")
          ), 
          React.createElement("div", {className: "channel-options | col-2"}, 
            React.createElement("div", {className: "message"}, 
              React.createElement("a", {className: " | rgb-text-240_250_250 no-underline bold", href: `http://www.twitch.tv/message/compose?to=${this.props.userData.name}`, target: "_blank"}, "Message")
            )
          )
        )
      ), 
      React.createElement("div", {className: "channel-name | center-justify"}, 
        React.createElement("h3", {className: "top-marg-1_0"}, this.props.userData.display_name)
      ), 
      React.createElement("div", {className: "separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"}), 
      React.createElement("div", {className: "channel-bio | x-pad-0_5"}, 
        React.createElement("p", {className: " | unset"}, this.props.userData.bio)
      ), 
      React.createElement("div", {className: "separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"}), 
      React.createElement("div", {className: "social-media | x-pad-0_5 y-pad-0_5"}, 
        React.createElement("div", {className: "title | center-justify"}, 
          React.createElement("h4", {className: " | unset"}, "Social Media")
        ), 
        React.createElement("div", {className: "icons | x-pad-0_5 y-pad-0_5"}, 
          React.createElement("div", {className: "icon | col-4 x-pad-0_5 y-pad-0_5 img-contain"}, 
            React.createElement("a", {href: "http://twitter.com/piecedigital"}, 
              React.createElement("img", {src: "/assets/twitter.png"})
            )
          ), 
          React.createElement("div", {className: "icon | col-4 x-pad-0_5 y-pad-0_5 img-contain"}, 
            React.createElement("a", {href: "http://facebook.com/piecedigitalstudios"}, 
              React.createElement("img", {src: "/assets/facebook.png"})
            )
          ), 
          React.createElement("div", {className: "icon | col-4 x-pad-0_5 y-pad-0_5 img-contain"}, 
            React.createElement("a", {href: "http://instagram.com/piecedigitalstudios"}, 
              React.createElement("img", {src: "/assets/instagram.png"})
            )
          ), 
          React.createElement("div", {className: "icon | col-4 x-pad-0_5 y-pad-0_5 img-contain"}, 
            React.createElement("a", {href: "http://tumblr.com/piecedigitalstudios"}, 
              React.createElement("img", {src: "/assets/tumblr.png"})
            )
          )
        )
      )
    ), 

    React.createElement("div", {className: "main-section | pos-relative full-width x-pad-1_0 y-pad-1_0 border-radius-1_0 rgb-bg-220_240_250"}, 
      React.createElement("div", {className: "header |"}, 
        React.createElement("div", {className: "profile-image | inline-block width-5_0"}, 
          React.createElement("div", {className: "image-container"}, 
            React.createElement("div", {className: " | width-4_0 x-pad-0_2 y-pad-0_2 border-radius-0_5 rgb-bg-100_200_250 img-contain"}, 
              React.createElement("img", {className: " | display-block border-radius-0_5", src: this.props.userData.logo})
            )
          )
        ), 
        React.createElement("div", {className: "stream-text | inline-block"}, 
          React.createElement("div", {className: "title"}, 
            React.createElement("h1", {className: " | unset font-size-2_5"}, this.props.channelData.status)
          ), 
          React.createElement("div", {className: "game"}, 
            React.createElement("span", {className: "user | bold"}, this.props.userData.display_name), " playing ", React.createElement("a", {className: "game | bold rgb-text-40_40_40 no-underline", href: `http://www.twitch.tv/directory/game/${this.props.channelData.game}`}, this.props.channelData.game)
          )
        )
      ), 
      React.createElement("div", {className: "stream-section | pos-relative max-height-34_0 right-pad-22_0 y-marg-1_0"}, 
        React.createElement("div", {className: "video-embed | full-width"}, 
          React.createElement("iframe", {className: " | fillout", src: `http://player.twitch.tv/?channel=${this.props.userData.name}`, frameBorder: "0"})
        ), 
        React.createElement("div", {className: "chat-embed | pos-absolute pos-top-0_0 pos-right-0_0 width-21_0"}, 
          React.createElement("iframe", {className: " | fillout", src: `http://twitch.tv/${this.props.userData.name}/chat`, frameBorder: "0"})
        )
      ), 
      React.createElement("div", {className: "options-belt |"}, 
        React.createElement("div", {className: "auth-needed | col-2-1 left-justify"}, 
          React.createElement("div", {className: "follow | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer"}, 
            React.createElement("span", {onClick: this.followChannel}, "Follow"), 
            React.createElement("div", {className: "notification-option | cursor-pointer"}
            )
          ), 
          React.createElement("div", {className: "share | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer"}, 
            React.createElement("span", null, "Share")
          ), 
          React.createElement("div", {className: "theater | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer"}, 
            React.createElement("span", null, "Theater")
          ), 
          React.createElement("div", {className: "settings | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer"}, 
            React.createElement("span", null, "Settings")
          )
        ), 
        React.createElement("div", {className: "no-auth | col-2-1 right-justify"}, 
          React.createElement("div", {className: "wraper | inline-block x-pad-0_5 y-pad-0_5 border-radius-0_3 rgb-bg-200_220_250"}, 
            React.createElement("div", {className: "viewers | inline-block"}, 
              React.createElement("span", {className: "counter | x-marg-0_5{(!this.props.streamData.stream) ? ' hidden' : ''}"}, (this.props.streamData.stream) ? this.props.streamData.stream.viewers : 0), " ", React.createElement("span", null, "viewers")
            ), 
            React.createElement("div", {className: "views | inline-block"}, 
              React.createElement("span", {className: "counter | x-marg-0_5"}, this.props.channelData.views), " ", React.createElement("span", null, "views")
            ), 
            React.createElement("div", {className: "followers | inline-block"}, 
              React.createElement("span", {className: "counter | x-marg-0_5"}, this.props.channelData.followers), " ", React.createElement("span", null, "followers")
            )
          )
        )
      ), 
      React.createElement("div", {className: "separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"}), 
      React.createElement("div", {className: "channel-panels |"}, 
        React.createElement("div", {className: "title"}, 
          React.createElement("h1", {className: " | unset"}, "Panels")
        ), 
        
        	this.props.panelData.map(function(panel, ind) {
            var link = panel.data.link || "";
            return (
              React.createElement("div", {key: ind, className: "panel | col-3-2-1 x-pad-0_5 y-pad-0_5"}, 
                React.createElement("div", {className: " | height-15_0 rgb-bg-100_200_250 overflow-auto"}, 
                  
                    (panel.data.image) ?
                      React.createElement("div", {className: "image | img-contain x-pad-0_5 y-pad-0_5 rgb-bg-60_160_210"}, 
                        
                          (panel.data.link) ?
                          React.createElement("a", {href: panel.data.link, target: "_blank"}, 
                            React.createElement("img", {src: panel.data.image})
                          )
                          : React.createElement("img", {src: panel.data.image})
                        
                      )
                    : "", 
                  
                  React.createElement("div", {className: "body | image-contain x-pad-0_5 y-pad-0_5", dangerouslySetInnerHTML: {__html : panel.html_description}}
                  )
                )
              )
            )
		      })
		    
      ), 
      React.createElement("div", {className: "separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"}), 
      React.createElement("div", {className: "channel-past-broadcasts |"}, 
        React.createElement("div", {className: "title"}, 
          React.createElement("h1", {className: " | unset"}, "Past Broadcasts")
        ), 
        
          this.props.videoData.videos.map(function(video, ind) {
            return (
              React.createElement("div", {key: ind, className: "video | col-3-2-1 x-pad-0_5 y-pad-0_5 no-underline rgb-text-40_40_40"}, 
                React.createElement("a", {href: video._links.self, "data-id": video._links._id, target: "_blank", className: " | block height-15_0 rgb-bg-100_200_250 overflow-auto", style: {
                  backgroundImage: `url(${video.preview})`
                }}
                )
              )
            )
          })
        
      )
    )

  )

)
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return React[options.render](nodes);
}(this))
	}
});

ReactDOM.render(React.createElement(RenderDocument, null), document.querySelector("#render-document"));

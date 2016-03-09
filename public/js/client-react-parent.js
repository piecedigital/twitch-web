var clientKey = "tgfnn2bzt2f55lm684fajjq2i2v1ld";

var RenderDocument = React.createClass({
displayName: "RenderDocument",

getInitialState: function() {
  return {"userData":{"display_name":"PieceDigital","_id":83101325,"name":"piecedigital","type":"user","bio":"Full-stack web developer, experience in building responsive websites and web apps using the Node server runtime. When I'm not programming I'm probably playing video games like League of Legends.","created_at":"2015-02-19T03:19:45Z","updated_at":"2016-03-08T19:01:08Z","logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_image-19ef151d5e81e1ed-300x300.png","_links":{"self":"https://api.twitch.tv/kraken/users/piecedigital"}},"channelData":{"mature":false,"status":"Learning how to play Skullgirls","broadcaster_language":"en","display_name":"PieceDigital","game":"Skullgirls","language":"en","_id":83101325,"name":"piecedigital","created_at":"2015-02-19T03:19:45Z","updated_at":"2016-03-08T19:01:08Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_image-19ef151d5e81e1ed-300x300.png","banner":null,"video_banner":null,"background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/piecedigital-profile_banner-5bea98f42e9179b8-480.png","profile_banner_background_color":null,"partner":false,"url":"http://www.twitch.tv/piecedigital","views":385,"followers":11,"_links":{"self":"https://api.twitch.tv/kraken/channels/piecedigital","follows":"https://api.twitch.tv/kraken/channels/piecedigital/follows","commercial":"https://api.twitch.tv/kraken/channels/piecedigital/commercial","stream_key":"https://api.twitch.tv/kraken/channels/piecedigital/stream_key","chat":"https://api.twitch.tv/kraken/chat/piecedigital","features":"https://api.twitch.tv/kraken/channels/piecedigital/features","subscriptions":"https://api.twitch.tv/kraken/channels/piecedigital/subscriptions","editors":"https://api.twitch.tv/kraken/channels/piecedigital/editors","teams":"https://api.twitch.tv/kraken/channels/piecedigital/teams","videos":"https://api.twitch.tv/kraken/channels/piecedigital/videos"}},"panelData":[{"_id":4332631,"display_order":1,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://instagram.com/piecedigitalstudios","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-c1ef7720cc0004b9-320.png","title":"Instagram"},"channel":"piecedigital"},{"_id":4333167,"display_order":2,"kind":"default","html_description":"<p>I'm a full-stack web developer.</p>\n\n<p>I use the MERN-stack.</p>\n\n<p>Click to visit my <a href=\"http://piecedigital.github.io\">website</a>.</p>\n\n<p>I'm open for work.</p>\n","user_id":83101325,"data":{"link":"http://piecedigital.github.io","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-3edc065014a32fa4-320.png","title":"Website","description":"I'm a full-stack web developer.\n\nI use the MERN-stack.\n\nClick to visit my [website](http://piecedigital.github.io).\n\nI'm open for work."},"channel":"piecedigital"},{"_id":4332623,"display_order":3,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://twitter.com/piecedigital","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-086b4fb924f41e72-320.png","title":"Twitter"},"channel":"piecedigital"},{"_id":4332647,"display_order":4,"kind":"default","html_description":null,"user_id":83101325,"data":{"link":"http://youtube.com/thepreygrigade","image":"http://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-9767cf22e011eb88-320.png","title":"YouTube"},"channel":"piecedigital"},{"_id":8723933,"display_order":5,"kind":"default","html_description":"<p>If you'd like to gift me with a little extra coin feel free to donate! It's totally optional so you can just enjoy the stream :)</p>\n","user_id":83101325,"data":{"link":"https://streamtip.com/t/piecedigital","image":"https://static-cdn.jtvnw.net/jtv_user_pictures/panel-83101325-image-fa1859fb2ab24149-320.png","title":"Donate","description":"If you'd like to gift me with a little extra coin feel free to donate! It's totally optional so you can just enjoy the stream :)"},"channel":"piecedigital"},{"_id":8990500,"display_order":6,"kind":"default","html_description":"<ul>\n<li>!bio</li>\n<li>!about</li>\n<li>!twitter</li>\n</ul>\n\n","user_id":83101325,"data":{"link":"","image":"","title":"Commands","description":"* !bio\n* !about\n* !twitter"},"channel":"piecedigital"}],"streamData":{"stream":null,"_links":{"self":"https://api.twitch.tv/kraken/streams/piecedigital","channel":"https://api.twitch.tv/kraken/channels/piecedigital"}},"videoData":{"_total":0,"_links":{"self":"https://api.twitch.tv/kraken/channels/piecedigital/videos?broadcast_type=archive&broadcasts=true&limit=10&offset=0&user=piecedigital","next":"https://api.twitch.tv/kraken/channels/piecedigital/videos?broadcast_type=archive&broadcasts=true&limit=10&offset=10&user=piecedigital"},"videos":[]},"panelOpen":false,"theaterMode":false,"topBar":true};
},
login: function() {
  document.cookie = "app-redirect=" + location.href + ";domain=" + location.hostname + ";path=/";
  location.href = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id="+clientKey+"&redirect_uri=http://localhost:8080&scope=user_read+channel_read+user_follows_edit";
},
logout: function() {
  Twitch.logout();
},
followChannel: function() {
  var self = this;
  console.log("clicked follow", this.state.loggedIn);
  if(this.state.loggedIn) {
    Twitch.api({method: "/users/"+ self.state.currentUserData.name +"/follows/channels/piecedigital", verb: 'PUT', params: { notifications : true } }, function() {
    });
  } else {
    this.login();
  }
},
toggleTheater: function() {
  this.setState({ theaterMode : this.state.theaterMode ? false : true })
},
toggleChat: function() {
  $(".stream-section").toggleClass("hide-chat");
},
toggleSidePanel: function() {
  this.setState({ panelOpen : this.state.panelOpen ? false : true })
},
toggleTopBar: function() {
  this.setState({ topBar : this.state.topBar ? false : true })
},
loadStream: function(e) {
  $(e.target).addClass("hidden-force");
  $(".video-embed iframe").attr("src", "http://player.twitch.tv/?channel=" + this.state.userData.name);
},
loadRecording: function(e) {
  e.preventDefault();
  var videoId = e.target.attributes["data-video-id"].value,
    url = "http://player.twitch.tv/?video=" + videoId;

  $(".video-embed iframe").attr("src", url);
  $(".options-belt .auth-needed .stream").removeClass("hidden-force");
},
sendMessage: function() {
  window.open("http://www.twitch.tv/message/compose?to=PieceDigital", "_blank");
},
select: function(e) {
  console.log("stuffffff")
  e.target.select();
},
componentDidMount: function() {
  var self = this;

  Twitch.init({clientId: clientKey}, function(error, status) {
    if (error) {
      // error encountered while loading
      console.error(error);
    }
    // the sdk is now loaded
    if (status.authenticated) {
      // user is currently logged in
      Twitch.api({method: "/channel", verb: 'GET' }, function(err, data) {
        if(err) {
          console.error(err);
          return;
        };

        location.hash = "";
        self.setState({
          loggedIn: true,
          currentUserData: data
        });
      });
    } else
    if (!status.authenticated) {
      // user is not currently logged in
      self.setState({ loggedIn : false });
    }
  });
},
render: function render() {
  return React.createElement( DocumentChild, this );
}
});

var DocumentChild = React.createClass({
displayName: "RenderDocument",

render: function render() {
  return (function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement("div", {id: "render-document", className: ""}, 
  React.createElement("div", {className: "top-bar" + (this.props.state.topBar ? "" : " closed")}, 
    React.createElement("div", {className: "options"}, 
      React.createElement("div", {className: "btn-default toggle-top-bar", onClick: this.props.toggleTopBar}, 
        "^"
      ), 
      React.createElement("div", {className: "btn-default toggle-side-panel", onClick: this.props.toggleSidePanel}, 
        "Side Panel"
      )
    ), 
    React.createElement("div", {className: "authentication"}, 
      React.createElement("div", {className:  "login " + ( (this.props.state.loggedIn) ? 'hidden' : 'false') }, 
        React.createElement("img", {src: "http://ttv-api.s3.amazonaws.com/assets/connect_light.png", className: "twitch-connect pointer", href: "#", onClick:  this.props.login})
      ), 
      React.createElement("div", {className:  "logout " + ( (!this.props.state.loggedIn) ? 'hidden' : 'false') }, 
        React.createElement("span", {className: "btn-default", onClick:  this.props.logout}, "logout")
      )
    )
  ), 
  React.createElement("div", {className: "page" + (this.props.state.topBar ? "" : " closed")}, 

  	React.createElement("div", {className:  "side-panel" + (this.props.state.panelOpen ? " open" : "") }, 
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "profile-image"}, 
          React.createElement("div", {className: ""}, 
            React.createElement("img", {className: "", src: this.props.state.userData.logo}), 
            React.createElement("div", {className: "channel-status"}, 
              React.createElement("h3", {className: ""}, "Offline")
            ), 
            React.createElement("span", null, "|"), 
            React.createElement("div", {className: "channel-options"}, 
              React.createElement("div", {className: "message"}, 
                React.createElement("a", {className: "", href: `http://www.twitch.tv/message/compose?to=${this.props.state.userData.name}`, target: "_blank"}, "Message")
              )
            )
          )
        ), 
        React.createElement("div", {className: "channel-name"}, 
          React.createElement("h3", {className: ""}, this.props.state.userData.display_name)
        ), 
        React.createElement("div", {className: "separator"}), 
        React.createElement("div", {className: "channel-bio"}, 
          React.createElement("p", {className: ""}, this.props.state.userData.bio)
        ), 
        React.createElement("div", {className: "separator"}), 
        React.createElement("div", {className: "social-media"}, 
          React.createElement("div", {className: "title"}, 
            React.createElement("h4", {className: ""}, "Social Media")
          ), 
          React.createElement("div", {className: "icons"}, 
            React.createElement("div", {className: "icon"}, 
              React.createElement("a", {href: "http://twitter.com/piecedigital"}, 
                React.createElement("img", {src: "/assets/twitter.png"})
              )
            ), 
            React.createElement("div", {className: "icon"}, 
              React.createElement("a", {href: "http://facebook.com/piecedigitalstudios"}, 
                React.createElement("img", {src: "/assets/facebook.png"})
              )
            ), 
            React.createElement("div", {className: "icon"}, 
              React.createElement("a", {href: "http://instagram.com/piecedigitalstudios"}, 
                React.createElement("img", {src: "/assets/instagram.png"})
              )
            ), 
            React.createElement("div", {className: "icon"}, 
              React.createElement("a", {href: "http://tumblr.com/piecedigitalstudios"}, 
                React.createElement("img", {src: "/assets/tumblr.png"})
              )
            )
          )
        )
      )
    ), 

    React.createElement("div", {className: "main-section" + (this.props.state.theaterMode ? " theater" : "")}, 
      React.createElement("div", {className: "header"}, 
        React.createElement("div", {className: "profile-image"}, 
          React.createElement("div", {className: "image-container"}, 
            React.createElement("div", {className: ""}, 
              React.createElement("img", {className: "", src: this.props.state.userData.logo})
            )
          )
        ), 
        React.createElement("div", {className: "stream-text"}, 
          React.createElement("div", {className: "title"}, 
            React.createElement("h1", {className: ""}, this.props.state.channelData.status)
          ), 
          React.createElement("div", {className: "game"}, 
            React.createElement("span", {className: "user"}, this.props.state.userData.display_name), " playing ", React.createElement("a", {className: " | bold rgb-text-40_40_40 no-underline", href: `http://www.twitch.tv/directory/game/${this.props.state.channelData.game}`}, this.props.state.channelData.game)
          )
        )
      ), 
      React.createElement("div", {className: "stream-section"}, 

        React.createElement("div", {className: "video-embed"}, 
          React.createElement("iframe", {className: "", src: `http://player.twitch.tv/?channel=${this.props.state.userData.name}`, frameBorder: "0", scrolling: "false"})
        ), 
        React.createElement("div", {className: "chat-embed"}, 
          React.createElement("iframe", {className: "", src: `http://twitch.tv/${this.props.state.userData.name}/chat`, frameBorder: "0"})
        )
      ), 
      React.createElement("div", {className: "options-belt"}, 
        React.createElement("div", {className: "auth-needed"}, 
          React.createElement("div", {className: "follow btn-default"}, 
            React.createElement("span", {onClick: this.props.followChannel}, "Follow"), 
            React.createElement("div", {className: "notification-option"}
            )
          ), 
          React.createElement("label", {htmlFor: "share-input", className: "share btn-default"}, 
            React.createElement("span", null, "Share"), 
            React.createElement("input", {id: "share-input", type: "checkbox"}), 
            React.createElement("div", {className: "share-box"}, 
              React.createElement("div", null, 
                React.createElement("label", null, "Channel Link"), 
                React.createElement("input", {type: "text", readOnly: "true", value:  `http://www.twitch.tv/${this.props.state.userData.name}`, onClick:  this.select})
              ), 
              React.createElement("div", null, 
                React.createElement("label", null, "Channel Link"), 
                React.createElement("input", {type: "text", readOnly: "true", value:  `<iframe src="http://player.twitch.tv/?channel=${this.props.state.userData.name}" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/${this.props.state.userData.name}?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from ${this.props.state.userData.name} on www.twitch.tv</a>`, onClick:  this.select})
              ), 
              React.createElement("div", null, 
                React.createElement("label", null, "Channel Link"), 
                React.createElement("input", {type: "text", readOnly: "true", value:  `<iframe src="http://www.twitch.tv/${this.props.state.userData.name}/chat?popout=" frameborder="0" scrolling="no" height="500" width="350"></iframe>`, onClick:  this.select})
              )
            )
          ), 
          React.createElement("div", {className: "chat btn-default", onClick:  this.props.toggleChat}, 
            React.createElement("span", null, "Toggle Chat")
          ), 
          React.createElement("div", {className: "theater btn-default", onClick:  this.props.toggleTheater}, 
            React.createElement("span", null, "Toggle Theater")
          ), 
          React.createElement("div", {className: "stream btn-default hidden-force", onClick:  this.props.loadStream}, 
            React.createElement("span", null, "Open Stream")
          )
        ), 
        React.createElement("div", {className: "no-auth"}, 
          React.createElement("div", {className: "wraper"}, 
            React.createElement("div", {className: "viewers"}, 
              React.createElement("span", {className: "counter {(!this.props.state.streamData.stream) ? ' hidden' : ''}"}, (this.props.state.streamData.stream) ? this.props.state.streamData.stream.viewers : 0), " ", React.createElement("span", null, "viewers")
            ), 
            React.createElement("div", {className: "views"}, 
              React.createElement("span", {className: "counter"}, this.props.state.channelData.views), " ", React.createElement("span", null, "views")
            ), 
            React.createElement("div", {className: "followers"}, 
              React.createElement("span", {className: "counter"}, this.props.state.channelData.followers), " ", React.createElement("span", null, "followers")
            )
          )
        )
      ), 
      React.createElement("div", {className: "separator"}), 
      React.createElement("div", {className: "channel-panels"}, 
        React.createElement("div", {className: "title"}, 
          React.createElement("h1", {className: ""}, "Panels")
        ), 
        
        	this.props.state.panelData.map(function(panel, ind) {
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
        
          this.props.state.videoData.videos.map(function(video, ind) {
            return (
              React.createElement("div", {key: ind, className: "video | col-3-2-1 x-pad-0_5 y-pad-0_5 no-underline rgb-text-40_40_40"}, 
                React.createElement("a", {href: video.url, target: "_blank", "data-video-id": video._id, className: " | block height-15_0 rgb-bg-100_200_250 overflow-auto", style: {
                  backgroundImage: `url(${video.preview})`
                }, onClick:  this.props.loadRecording}
                ), 
                React.createElement("span", {className: "video-info | block"}, 
                  React.createElement("span", {className: "| inline-block"}, video.title), 
                  React.createElement("span", {className: "| inline-block"}, React.createElement("a", {className: "underline", href: `http://twitch.tv/${video.channel.name}`, target: "_blank"}, video.channel.display_name), (function(){
                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    var time = new Date(video.recorded_at);
                    var month = time.getMonth(),
                      date = time.getDate(),
                      year = time.getFullYear();

                    return `| ${months[month].substring(0,3)} ${date}, ${year}`;
                  }()))
                )
              )
            )
          }.bind(this))
        
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

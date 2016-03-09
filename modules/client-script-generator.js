module.exports = function(renderData, pageData, config) {
  renderData.panelOpen = false;
  renderData.theaterMode = false;
  renderData.topBar = true;
  return `var clientKey = "${config.twitchClientKey}";

var RenderDocument = React.createClass({
displayName: "RenderDocument",

getInitialState: function() {
  return ${JSON.stringify(renderData)};
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
    Twitch.api({method: "/users/"+ self.state.currentUserData.name +"/follows/channels/${renderData.userData.name}", verb: 'PUT', params: { notifications : true } }, function() {
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
  window.open("http://www.twitch.tv/message/compose?to=${renderData.userData.display_name}", "_blank");
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
  return (${pageData}(this))
}
});

ReactDOM.render(React.createElement(RenderDocument, null), document.querySelector("#render-document"));
`;
};

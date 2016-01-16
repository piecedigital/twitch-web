<div id="render-document" className="| rgb-text-40_40_40">

  <div className="page | page-wrap-1600 pos-relative left-pad-22_0 right-pad-1_0 y-pad-1_0">

  	<div className="side-panel | pos-absolute pos-top-1_0 pos-left-1_0 width-20_0 x-pad-1_0 y-pad-1_0 border-radius-1_0 rgb-bg-220_240_250">
      <div className="profile-image | img-contain x-pad-1_0 parent">
        <div className=" | x-pad-0_5 y-pad-0_5 border-radius-0_8 rgb-bg-100_200_250">
          <img className=" | display-block border-radius-0_5" src="http://piecedigital.github.io/images/photo-of-me.png" />
          <div className="channel-status | center-justify col-2">
            <h3 className="unset top-marg-0_5 rgb-text-240_250_250">Offline</h3>
          </div>
          <div className="channel-options | col-2">
            <div className="message">
              <a className=" | rgb-text-240_250_250 no-underline bold" href="http://www.twitch.tv/message/compose?to=piecedigital" target="_blank">Message</a>
            </div>
          </div>
        </div>
      </div>
      <div className="channel-name | center-justify">
        <h3 className="top-marg-1_0">{this.state.userData.display_name}</h3>
      </div>
      <div className="separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"></div>
      <div className="channel-bio | x-pad-0_5">
        <p className=" | unset">{this.state.userData.bio}</p>
      </div>
      <div className="separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"></div>
      <div className="social-media | x-pad-0_5 y-pad-0_5">
        <div className="title | center-justify">
          <h4 className=" | unset">Social Media</h4>
        </div>
        <div className="icons | x-pad-0_5 y-pad-0_5">
          <div className="icon | col-4 x-pad-0_5 y-pad-0_5 img-contain">
            <a href="http://twitter.com/piecedigital">
              <img src="/assets/twitter.png" />
            </a>
          </div>
          <div className="icon | col-4 x-pad-0_5 y-pad-0_5 img-contain">
            <a href="http://facebook.com/piecedigitalstudios">
              <img src="/assets/facebook.png" />
            </a>
          </div>
          <div className="icon | col-4 x-pad-0_5 y-pad-0_5 img-contain">
            <a href="http://instagram.com/piecedigitalstudios">
              <img src="/assets/instagram.png" />
            </a>
          </div>
          <div className="icon | col-4 x-pad-0_5 y-pad-0_5 img-contain">
            <a href="http://tumblr.com/piecedigitalstudios">
              <img src="/assets/tumblr.png" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="main-section | pos-relative full-width x-pad-1_0 y-pad-1_0 border-radius-1_0 rgb-bg-220_240_250">
      <div className="header |">
        <div className="profile-image | inline-block width-5_0">
          <div className="image-container">
            <div className=" | width-4_0 x-pad-0_2 y-pad-0_2 border-radius-0_5 rgb-bg-100_200_250 img-contain">
              <img className=" | display-block border-radius-0_5" src="http://piecedigital.github.io/images/photo-of-me.png" />
            </div>
          </div>
        </div>
        <div className="stream-text | inline-block">
          <div className="title">
            <h1 className=" | unset font-size-2_5">{this.state.channelData.status}</h1>
          </div>
          <div className="game">
            <span className="user | bold">{this.state.userData.display_name}</span> playing <a className="game | bold rgb-text-40_40_40 no-underline" href="http://www.twitch.tv/directory/game/programming">{this.state.channelData.game}</a>
          </div>
        </div>
      </div>
      <div className="stream-section | pos-relative max-height-34_0 right-pad-22_0 y-marg-1_0">
        <div className="video-embed | full-width">
          <iframe className=" | fillout" src="http://player.twitch.tv/?channel=piecedigital" frameBorder="0"></iframe>
        </div>
        <div className="chat-embed | pos-absolute pos-top-0_0 pos-right-0_0 width-21_0">
          <iframe className=" | fillout" src="http://twitch.tv/piecedigital/chat" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="options-belt |">
        <div className="auth-needed | col-2-1 left-justify">
          <div className="follow | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer">
            <span>Follow</span>
            <div className="notification-option | cursor-">
            </div>
          </div>
          <div className="share | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer">
            <span>Share</span>
          </div>
          <div className="theater | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer">
            <span>Theater</span>
          </div>
          <div className="settings | inline-block x-marg-0_2 x-pad-0_3 y-pad-0_3 border-radius-0_3 rgb-bg-100_200_250 cursor-pointer">
            <span>Settings</span>
          </div>
        </div>
        <div className="no-auth | col-2-1 right-justify">
          <div className="wraper | inline-block x-pad-0_5 y-pad-0_5 border-radius-0_3 rgb-bg-200_220_250">
            <div className="viewers | inline-block">
              <span className="counter | x-marg-0_5{(!this.state.streamData.stream) ? ' hidden' : ''}">{(this.state.streamData.stream) ? this.state.streamData.stream.viewers : 0}</span> <span>viewers</span>
            </div>
            <div className="views | inline-block">
              <span className="counter | x-marg-0_5">{this.state.channelData.views}</span> <span>views</span>
            </div>
            <div className="followers | inline-block">
              <span className="counter | x-marg-0_5">{this.state.channelData.followers}</span> <span>followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"></div>
      <div className="channel-panels |">
        <div className="title">
          <h1 className=" | unset">Panels</h1>
        </div>
        {
        	this.state.panelData.map(function(panel) {
        		return (
	        		<div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
			          <div className=" | height-20_0 rgb-bg-100_200_250 overflow-auto">{panel.data.description}</div>
			        </div>
		        )
		      })
		    }
      </div>
      <div className="separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"></div>
      <div className="channel-past-broadcasts |">
        <div className="title">
          <h1 className=" | unset">Past Broadcasts</h1>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
      </div>
      <div className="separator | height-0_1 y-marg-1_0 rgb-bg-100_200_250"></div>
      <div className="channel-highLights |">
        <div className="title">
          <h1 className=" | unset">HighLights</h1>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
        <div className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
          <div className=" | height-20_0 rgb-bg-100_200_250"></div>
        </div>
      </div>
    </div>

  </div>

</div>
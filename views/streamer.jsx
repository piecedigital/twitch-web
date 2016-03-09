<div id="render-document" className="">
  <div className={"top-bar" + (this.props.state.topBar ? "" : " closed")}>
    <div className="options">
      <div className="btn-default toggle-top-bar" onClick={this.props.toggleTopBar}>
        ^
      </div>
      <div className="btn-default toggle-side-panel" onClick={this.props.toggleSidePanel}>
        Toggle Side Panel
      </div>
    </div>
    <div className="authentication">
      <div className={ "login " + ( (this.props.state.loggedIn) ? 'hidden' : 'false' ) }>
        <img src="http://ttv-api.s3.amazonaws.com/assets/connect_light.png" className="twitch-connect pointer" href="#" onClick={ this.props.login } />
      </div>
      <div className={ "logout " + ( (!this.props.state.loggedIn) ? 'hidden' : 'false' ) }>
        <span className="btn-default" onClick={ this.props.logout }>logout</span>
      </div>
    </div>
  </div>
  <div className={"page" + (this.props.state.topBar ? "" : " closed")}>

  	<div className={ "side-panel" + (this.props.state.panelOpen ? " open" : "") }>
      <div className="container">
        <div className="profile-image">
          <div className="">
            <img className="" src={this.props.state.userData.logo} />
            <div className="channel-status">
              <h3 className="">Offline</h3>
            </div>
            <span>|</span>
            <div className="channel-options">
              <div className="message">
                <a className="" href={`http://www.twitch.tv/message/compose?to=${this.props.state.userData.name}`} target="_blank">Message</a>
              </div>
            </div>
          </div>
        </div>
        <div className="channel-name">
          <h3 className="">{this.props.state.userData.display_name}</h3>
        </div>
        <div className="separator"></div>
        <div className="channel-bio">
          <p className="">{this.props.state.userData.bio}</p>
        </div>
        <div className="separator"></div>
        <div className="social-media">
          <div className="title">
            <h4 className="">Social Media</h4>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="http://twitter.com/piecedigital">
                <img src="/assets/twitter.png" />
              </a>
            </div>
            <div className="icon">
              <a href="http://facebook.com/piecedigitalstudios">
                <img src="/assets/facebook.png" />
              </a>
            </div>
            <div className="icon">
              <a href="http://instagram.com/piecedigitalstudios">
                <img src="/assets/instagram.png" />
              </a>
            </div>
            <div className="icon">
              <a href="http://tumblr.com/piecedigitalstudios">
                <img src="/assets/tumblr.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"main-section" + (this.props.state.theaterMode ? " theater" : "")}>
      <div className="header">
        <div className="profile-image">
          <div className="image-container">
            <div className="">
              <img className="" src={this.props.state.userData.logo} />
            </div>
          </div>
        </div>
        <div className="stream-text">
          <div className="title">
            <h1 className="">{this.props.state.channelData.status}</h1>
          </div>
          <div className="game">
            <span className="user">{this.props.state.userData.display_name}</span> playing <a className=" | bold rgb-text-40_40_40 no-underline" href={`http://www.twitch.tv/directory/game/${this.props.state.channelData.game}`}>{this.props.state.channelData.game}</a>
          </div>
        </div>
      </div>
      <div className="stream-section">

        <div className="video-embed">
          <iframe className="" src={`http://player.twitch.tv/?channel=${this.props.state.userData.name}`} frameBorder="0" scrolling="false"></iframe>
        </div>
        <div className="chat-embed">
          <iframe className="" src={`http://twitch.tv/${this.props.state.userData.name}/chat`} frameBorder="0"></iframe>
        </div>
      </div>
      <div className="options-belt">
        <div className="auth-needed">
          <div className="follow btn-default">
            <span onClick={this.props.followChannel}>Follow</span>
            <div className="notification-option">
            </div>
          </div>
          <label htmlFor="share-input" className="share btn-default">
            <span>Share</span>
            <input id="share-input" type="checkbox" />
            <div className="share-box">
              <div>
                <label>Channel Link</label>
                <input type="text" readOnly="true" value={ `http://www.twitch.tv/${this.props.state.userData.name}` } onClick={ this.select } />
              </div>
              <div>
                <label>Channel Link</label>
                <input type="text" readOnly="true" value={ `<iframe src="http://player.twitch.tv/?channel=${this.props.state.userData.name}" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/${this.props.state.userData.name}?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from ${this.props.state.userData.name} on www.twitch.tv</a>` } onClick={ this.select } />
              </div>
              <div>
                <label>Channel Link</label>
                <input type="text" readOnly="true" value={ `<iframe src="http://www.twitch.tv/${this.props.state.userData.name}/chat?popout=" frameborder="0" scrolling="no" height="500" width="350"></iframe>` } onClick={ this.select } />
              </div>
            </div>
          </label>
          <div className="chat btn-default" onClick={ this.props.toggleChat }>
            <span>Toggle Chat</span>
          </div>
          <div className="theater btn-default" onClick={ this.props.toggleTheater }>
            <span>Toggle Theater</span>
          </div>
          <div className="stream btn-default hidden-force" onClick={ this.props.loadStream }>
            <span>Open Stream</span>
          </div>
        </div>
        <div className="no-auth">
          <div className="wraper">
            <div className="viewers">
              <span className="counter {(!this.props.state.streamData.stream) ? ' hidden' : ''}">{(this.props.state.streamData.stream) ? this.props.state.streamData.stream.viewers : 0}</span> <span>viewers</span>
            </div>
            <div className="views">
              <span className="counter">{this.props.state.channelData.views}</span> <span>views</span>
            </div>
            <div className="followers">
              <span className="counter">{this.props.state.channelData.followers}</span> <span>followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="channel-panels">
        <div className="title">
          <h1 className="">Panels</h1>
        </div>
        {
        	this.props.state.panelData.map(function(panel, ind) {
            var link = panel.data.link || "";
            return (
              <div key={ind} className="panel | col-3-2-1 x-pad-0_5 y-pad-0_5">
                <div className=" | height-15_0 rgb-bg-100_200_250 overflow-auto">
                  {
                    (panel.data.image) ?
                      <div className="image | img-contain x-pad-0_5 y-pad-0_5 rgb-bg-60_160_210">
                        {
                          (panel.data.link) ?
                          <a href={panel.data.link} target="_blank">
                            <img src={panel.data.image} />
                          </a>
                          : <img src={panel.data.image} />
                        }
                      </div>
                    : ""
                  }
                  <div className="body | image-contain x-pad-0_5 y-pad-0_5" dangerouslySetInnerHTML={{__html : panel.html_description}}>
                  </div>
                </div>
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
        {
          this.props.state.videoData.videos.map(function(video, ind) {
            return (
              <div key={ind} className="video | col-3-2-1 x-pad-0_5 y-pad-0_5 no-underline rgb-text-40_40_40">
                <a href={video.url} target="_blank" data-video-id={video._id} className=" | block height-15_0 rgb-bg-100_200_250 overflow-auto" style={{
                  backgroundImage: `url(${video.preview})`
                }} onClick={ this.props.loadRecording }>
                </a>
                <span className="video-info | block">
                  <span className="| inline-block">{video.title}</span>
                  <span className="| inline-block"><a className="underline" href={`http://twitch.tv/${video.channel.name}`} target="_blank">{video.channel.display_name}</a>{(function(){
                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    var time = new Date(video.recorded_at);
                    var month = time.getMonth(),
                      date = time.getDate(),
                      year = time.getFullYear();

                    return `| ${months[month].substring(0,3)} ${date}, ${year}`;
                  }())}</span>
                </span>
              </div>
            )
          }.bind(this))
        }
      </div>
    </div>

  </div>

</div>

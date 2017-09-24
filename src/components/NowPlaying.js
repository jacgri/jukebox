import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NowPlaying.css'
import YouTube from 'react-youtube'

class NowPlaying extends Component {
  getVideoEvent (event) {
    window.YTPlayer = event.target
  }
  playVideo () {
    window.YTPlayer.playVideo()
  }
  pauseVideo () {
    window.YTPlayer.pauseVideo()
  }

  render () {
    const opts = {
      height: '75',
      width: '135',
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div className="NowPlaying">
        <div className="video">
          <YouTube videoId={this.props.videoId} opts={opts} onReady={this.getVideoEvent} />
        </div>
        <div className="controls">
          <i className={`fa fa-play`} aria-hidden="true" onClick={this.playVideo}></i>
          <i className={`fa fa-pause`} aria-hidden="true" onClick={this.pauseVideo}></i>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    videoId: state
  }
}

export default connect(mapStateToProps)(NowPlaying)

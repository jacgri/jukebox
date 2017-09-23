import React from 'react'
import { connect } from 'react-redux'
import './NowPlaying.css'
import YouTube from 'react-youtube'

function NowPlaying (props) {
  const playerOptions = {
    height: '75',
    width: '135',
    playerVars: {
      autoplay: 1
    }
  }
  return (
    <div className="NowPlaying">
      <div className="video">
        <YouTube videoId={props.videoId} opts={playerOptions} />
      </div>
      <div className="controls">
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    videoId: state
  }
}

export default connect(mapStateToProps)(NowPlaying)

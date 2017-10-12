import React, { Component } from 'react'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      playlistItems: []
    }
  }

  componentDidMount (playlistId) {
    const youtube = window.gapi.client.youtube
    youtube.playlistItems.list({
      playlistId,
      part: 'snippet,contentDetails',
      maxResults: 50
    }).then(response => {
      const result = response.result

      if (!result.items || !result.items.length) {
        return
      }
      this.setState({
        playlistItems: result.items
      })
    }).catch(error => console.log(error))
  }

  render () {
    return (
      <div className="Home">
        {this.playlistItems}
      </div>
    )
  }
}

export default Home

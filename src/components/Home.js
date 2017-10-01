import React, { Component } from 'react'
import Link from 'react-router-dom'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      channels: []
    }
  }

  componentDidMount () {
    const youtube = window.gapi.client.youtube
    youtube.channels.list({
      part: 'id',
      mine: false
    }).then(response => {
      const result = response.result

      if (!result.items || !result.items.length) {
        return
      }
      const channelId = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ'

      window.gapi.client.youtube.channels.list({
        channelId,
        maxResults: 25,
        part: 'snippet, contentDetails'
      }).then(response => {
        this.setState({
          channels: response.result.item
        })
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }

  render () {
    return (
      <div className="Home">
        <Home home={this.state.home} />
      </div>
    )
  }
}

export default Home

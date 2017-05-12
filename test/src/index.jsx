import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='other' isOpen={this.state.isOpen} videoId='http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_2160p_60fps_stereo_abl.mp4' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)

import React, { Component } from 'react';
import Sound from 'react-sound'

class Pad extends Component {

  constructor(props){
    super(props)
    this.state = {
      playStatus: 'NOT PLAYING'
    }
  }

  play = () => {
    this.setState({
      playStatus: 'PLAYING'
    })
  }

  render() {
    const audio = new Audio('./public/Snap.wav')
    return (
      <div>
        <button onClick={this.play} class="pad" type="button" key={this.props.id} src={this.props.url}>
          <p className="padText">{this.props.name}</p>
          <Sound playStatus={this.state.playStatus} url={'https://mpcloud.s3-us-west-1.amazonaws.com/MM_-_METAL_SNARE_-_C%23M.wav'} />
        </button>

        <button onClick={audio.play()}>
        </button>

      </div>
    );
  }

}

export default Pad;

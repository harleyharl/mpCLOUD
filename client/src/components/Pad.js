import React, { Component } from 'react';
import Sound from 'react-sound'

class Pad extends Component {

  constructor(props){
    super(props)
    this.state = {
      playStatus: 'STOPPED'
    }
  }

  play = () => {
    this.setState({
      playStatus: 'PLAYING'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.play} className="pad" type="button" key={this.props.id} src={this.props.url}>
          <p className="padText">{this.props.name}</p>
          <Sound playStatus={this.state.playStatus} url={this.props.url} />
        </button>
      </div>
    );
  }

}

export default Pad;

import React, { Component } from 'react';
import Pad from './Pad'
class Pads extends Component {
  renderPads = () => this.props.sounds.map((sound) => <Pad sound={sound} key={sound.id} url={sound.url} name={sound.name} />)

  render() {
    return(
      <ul>
        {this.renderPads()}
      </ul>
    );
  }
};

export default Pads;

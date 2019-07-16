import React, { Component } from 'react';
import SoundkitForm from '../Form/index';

class SoundkitNew extends Component {
  render() {
    return (
      <div className="SoundkitNew col-md-8 col-md-offset-2">
        <h2>New Soundkit</h2>
        <SoundkitForm history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}

export default SoundkitNew;

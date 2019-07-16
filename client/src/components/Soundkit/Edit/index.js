import React, { Component } from 'react';
import SoundkitForm from '../Form/index';

class SoundkitEdit extends Component {
  render() {
    return (
      <div className="SoundkitEdit col-md-8 col-md-offset-2">
        <h2>Edit Soundkit</h2>
        <SoundkitForm history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}

export default SoundkitEdit;

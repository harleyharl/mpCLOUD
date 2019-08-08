import React, { Component } from 'react';
import SoundkitForm from '../Form/index';
import './index.css'
import NavBar from '../../NavBar'

class SoundkitEdit extends Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="SoundkitEdit">
          <h2>Edit Soundkit</h2>
          <SoundkitForm history={this.props.history} match={this.props.match} />
        </div>
      </div>
    );
  }
}

export default SoundkitEdit;

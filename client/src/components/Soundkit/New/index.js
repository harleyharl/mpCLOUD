import React, { Component } from 'react';
import SoundkitForm from '../Form/index';
import Container from 'react-bootstrap/Container'
import './index.css'

class SoundkitNew extends Component {
  render() {
    return (
      <div className="SoundkitNew">
      <Container>
        <h2>Build Your Own Soundkit</h2>
        <SoundkitForm history={this.props.history} match={this.props.match} />
      </Container>
      </div>
    );
  }
}

export default SoundkitNew;

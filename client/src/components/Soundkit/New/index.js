import React, { Component } from 'react';
import SoundkitForm from '../Form/index';
import Container from 'react-bootstrap/Container'
import './index.css'
import NavBar from '../../NavBar'


class SoundkitNew extends Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="SoundkitNew">
        <Container>
          <h2>Build Your Own Soundkit</h2>
          <SoundkitForm history={this.props.history} match={this.props.match} />
        </Container>
        </div>
      </div>
    );
  }
}

export default SoundkitNew;

import React, { Component } from 'react';
import Pads from '../components/Pads/Pads'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import './PadContainer.css'


class PadContainer extends Component {

  render() {
    return (
      <Container className="text-center">
        <Pads currentSoundkit={this.props.currentSoundkit} analyser={this.props.analyser} context={this.props.context} sounds={this.props.currentSoundkit.sounds}/>
      </Container>
    );
  }

}

const mapStateToProps = state => ({
  currentSoundkit: state.soundKits.currentSoundkit
})

export default connect(mapStateToProps)(PadContainer);

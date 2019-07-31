import React, { Component } from 'react';
import Pads from '../components/Pads/Pads'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'


class PadContainer extends Component {

  render() {
    return (
      <Container>
        <Pads analyser={this.props.analyser} context={this.props.context} sounds={this.props.currentSoundkit.sounds}/>
        <div>{this.props.currentSoundkit.description}</div>
      </Container>
    );
  }

}

const mapStateToProps = state => ({
  currentSoundkit: state.soundKits.currentSoundkit
})

export default connect(mapStateToProps)(PadContainer);

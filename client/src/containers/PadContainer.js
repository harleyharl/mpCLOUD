import React from 'react';
import Pads from '../components/Pads/Pads'
import Container from 'react-bootstrap/Container'
import './PadContainer.css'

const PadContainer = props => {
    return (
      <Container className="text-center">
        <Pads currentSoundkit={props.currentSoundkit} analyser={props.analyser} context={props.context} sounds={props.currentSoundkit.sounds}/>
      </Container>
    );
  }

export default PadContainer;

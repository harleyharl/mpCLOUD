import React, { Component } from 'react';
import styled from 'styled-components'
import Pad from './Pad'
import Container from 'react-bootstrap/Container'

class Pads extends Component {

  renderPads = () => this.props.sounds.map((sound, index) => <Pad analyser={this.props.analyser} context={this.props.context} index={index} sound={sound} key={sound.id} url={sound.url} name={sound.name} letter={(this.assignLetter(index))} />)

  assignLetter = (index) => {
    if (index === 0) {
        return 'a'
    } else if (index === 1) {
        return 'w'
    } else if (index === 2){
        return 's'
    } else if (index === 3){
        return 'e'
    } else if (index === 4){
        return 'd'
    } else if (index === 5){
        return 'f'
    } else if (index === 6){
        return 't'
    } else if (index === 7){
        return 'g'
    } else if (index === 8){
        return 'y'
    } else if (index === 9){
        return 'h'
    } else if (index === 10){
        return 'u'
    } else if (index === 11){
        return 'j'
    } else if (index === 12){
        return 'i'
    } else if (index === 13){
        return 'k'
    } else if (index === 14){
        return 'o'
    } else if (index === 15){
        return 'l'
    }
  }

  render() {
    return(
      <Container >
        {this.renderPads()}
        <Button>
          <ButtonText> <b>{this.props.currentSoundkit.name}:</b> {this.props.currentSoundkit.description} </ButtonText>
        </Button>
      </Container >
    );
  }
};

export default Pads;

const Button = styled.button`
  background-color: #D4D4DC;
  height:7em;
  width:7em;
  position: relative
  border-radius: 20px;
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 20px;
  border: 1px
  border-style: dotted;
  word-wrap: break-word;
`

const ButtonText = styled.div`
  font-family: Arial;
  font-size: 12px;
  line-height: 12px;
  width: 6.5em;
  color: #005995;
  position: absolute;
  right: 15px;
  top: 7px
`

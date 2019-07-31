import React, { Component } from 'react';
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
      </Container >
    );
  }
};

export default Pads;

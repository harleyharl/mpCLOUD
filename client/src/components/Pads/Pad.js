import React, { Component } from 'react';
import styled from 'styled-components'
import { setCurrentSound } from '../../actions/samplerActions'
import { connect } from 'react-redux'

class Pad extends Component {

  constructor(){
    super()
    this.state = {
      bgColor: "#fbf579"
    }
  }

  changeColor = (color) => {
    this.setState({
      bgColor: color
    })
  }

  changeColorBack = () => {
    if (this.state.bgColor === "#fa625f") {
      this.setState({bgColor : "#fbf579"})
    }
  }

  handleClick = (e) => {
    this.audio.play()
    this.audio.currentTime = 0
    this.changeColor("#fa625f")
    setTimeout(() => this.changeColorBack(), 50);
  }


  componentDidMount(){
    document.addEventListener('keypress', this.handleKeyDown)
    let audioElement = document.getElementById(this.props.sound.id)
    audioElement.crossOrigin = "anonymous"
    let mediaElementSource = this.props.context.createMediaElementSource(audioElement)
    mediaElementSource.connect(this.props.context.destination)
    mediaElementSource.connect(this.props.analyser)
  }

  handleKeyDown = (e) => {
    if (e.charCode === this.props.letter.charCodeAt()) {
      if (this.audio) {
        this.audio.play()
        this.audio.currentTime = 0
        this.changeColor("#fa625f")
        setTimeout(() => this.changeColorBack(), 50);

      }
    }
  }

  render() {
    return (
      <Button title={this.props.sound.name} type="button" onClick={this.handleClick} style={{backgroundColor: this.state.bgColor}}>
      <ButtonText> {this.props.letter} </ButtonText>
      <audio
        className="pad"
        ref={ref => this.audio = ref}
        src={this.props.url}
        id={this.props.sound.id}
        >
      </audio>
      </Button>
    );
  }

}

export default connect(null, {setCurrentSound})(Pad);

const Button = styled.button`
  margin: 10px;
  font-family: Times;
  background-color: DimGrey;
  height:7em;
  width:7em;
  position: relative
  border-radius: 20px;
  overflow: hidden
  &:hover {
    background: #555;
  }
`

const ButtonText = styled.p`
  font-family: Arial
  font-size: 15px
  line-height: 15px
  width: 45px
  color: #005995
  position: absolute;
  bottom: 0px;
  right: 15px;
  border: 0;
  text-align: right
  word-wrap: break-word;
`

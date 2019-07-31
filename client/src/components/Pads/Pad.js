import React, { Component } from 'react';
import Sound from 'react-sound'
import styled from 'styled-components'
import { setCurrentSound } from '../../actions/samplerActions'
import { connect } from 'react-redux'


const Button = styled.button`
  margin: 10px;
  font-family: Times;
  background-color: DimGrey;
  height:10em;
  width:10em;
  position: relative
  border-radius: 20px;
  overflow: hidden
`

const ButtonText = styled.p`
  background-color: DimGrey;
  font-family: Arial
  font-size: 15px
  line-height: 15px
  width: 45px
  color: white
  position: absolute;
  bottom: -5px;
  right: 10px;
  border: 0;
  overflow: hidden
  text-align: right
  word-wrap: break-word;
`

class Pad extends Component {

  sendToVizualizer = (e) => {
    // debugger
    this.props.setCurrentSound(e.currentTarget.src)
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
  }

  componentDidMount(){
    document.addEventListener('keypress', this.handleKeyDown)
    let audioElement = document.getElementById(this.props.sound.id)
    audioElement.crossOrigin = "anonymous"
    let mediaElementSource = this.props.context.createMediaElementSource(audioElement)
    mediaElementSource.connect(this.props.context.destination)
    mediaElementSource.connect(this.props.analyser)
    // mediaElementSource.start(0)
  }

  handleKeyDown = (e) => {
    if (e.charCode === this.props.letter.charCodeAt()) {
    this.audio.play()
    this.audio.currentTime = 0
    }
  }

// drumPad = (
//       <audio
//         className="pad"
//         ref={ref => this.audio = ref}
//         className='clip'
//         src={this.props.url}
//         id={this.props.sound.id}
//         onPlay={e => this.sendToVizualizer(e)}
//         >
//       </audio>
//     )

  render() {
    return (
        <Button type="button" onClick={this.handleClick}>
        <ButtonText> {this.props.name.toLowerCase()} </ButtonText>
        <audio
          className="pad"
          ref={ref => this.audio = ref}
          className='clip'
          src={this.props.url}
          id={this.props.sound.id}
          onPlay={e => this.sendToVizualizer(e)}
          >
        </audio>
        </Button>
    );
  }

}

export default connect(null, {setCurrentSound})(Pad);

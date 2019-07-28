import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './vizualizerContainer.css'
import { connect } from 'react-redux'
import AudioComponent from './AudioComponent'


class VizualizerContainer extends Component {

  constructor(props){
    super(props)
    this.createVisualization = this.createVisualization.bind(this)
    this.state = {
      currentSound: ""
    }
  }

  componentDidUpdate(){
    debugger
    this.createVisualization()
  }

  createVisualization(){
    let context = new AudioContext();
    let analyser = context.createAnalyser();
    let canvas = this.refs.analyzerCanvas;
    let ctx = canvas.getContext('2d');
    debugger
    let audio = this.refs.audio
    // let audio = document.createElement("audio"); // i had removed element from render... and the animation stopped rendering
    // audio.src= this.props.currentSound
    // audio.src= this.props.currentSound
    // audio.ref= "audio"
    audio.crossOrigin = "anonymous";
    let audioSrc = context.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    audioSrc.connect(context.destination);
    analyser.connect(context.destination);

    function renderFrame(){
    let freqData = new Uint8Array(analyser.frequencyBinCount)
    requestAnimationFrame(renderFrame)
    analyser.getByteFrequencyData(freqData)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#9933ff';
    let bars = 100;
    for (var i = 0; i < bars; i++) {
        let bar_x = i * 3;
        let bar_width = 2;
        let bar_height = -(freqData[i] / 2);
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
        }
    };
    renderFrame()
  }

  render() {
    return (
      <Container className="vizualizerContainer">
          <h2>currentSound</h2>
          <div id="mp3_player">
           <div id="audio_box">
              <audio
                ref="audio"
                autoPlay={true}
                controls={true}
                src={this.props.currentSound}
                >
              </audio>
            </div>
            </div>
            <canvas
                ref="analyzerCanvas"
                id="analyzer"
                >
            </canvas>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  currentSound: state.soundKits.currentSound
})

export default connect(mapStateToProps)(VizualizerContainer);

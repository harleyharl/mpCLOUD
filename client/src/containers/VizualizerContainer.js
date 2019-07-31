import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './vizualizerContainer.css'
import { connect } from 'react-redux'
import AudioComponent from './AudioComponent'


class VizualizerContainer extends Component {

  constructor(props){
    super(props)
    this.createVisualization = this.createVisualization.bind(this)
  }

    componentDidUpdate(){
      this.createVisualization()
    }
  //
  createVisualization(){
    let context = this.props.context
    let analyser = this.props.analyser;
    analyser.minDecibels = -180;
    analyser.maxDecibels = 100;
    analyser.smoothingTimeConstant = 0.7
    // debugger
    let canvas = this.refs.analyzerCanvas;
    let ctx = canvas.getContext('2d');
    // debugger
    function renderFrame(){
      let freqData = new Uint8Array(analyser.frequencyBinCount) // gives us huge array of zeroes (1024 to be precise)
      requestAnimationFrame(renderFrame) // gives us the current animation frame number
      analyser.getByteFrequencyData(freqData) //copies the current frequency data into a Uint8Array (unsigned byte array) passed into it (freqData)
      if (freqData[1] !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height) // clears
        ctx.fillStyle = '#0069D9';
        let bars = 1024;
        for (var i = 0; i < bars; i++) {
            let bar_x = i * 3;
            let bar_width = 1.5;
            let bar_height = -(freqData[(i)]);
            ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        }
      }
    renderFrame()
  }

  render() {
    return (
      <Container className="visualizerContainer" align-content="center">
            <canvas
                height="200px"
                ref="analyzerCanvas"
                id="analyzer"
                position="fixed"
                width="400%"
                align-content="center"
                >
            </canvas>
      </Container>
    )
  }
}

// const mapStateToProps = state => ({
//   currentSound: state.soundKits.currentSound
// })

export default VizualizerContainer

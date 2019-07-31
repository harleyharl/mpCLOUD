import React, { Component } from 'react';
import PadContainer from './containers/PadContainer'
import SoundKitContainer from './containers/SoundKitContainer'
import VizualizerContainer from './containers/VizualizerContainer'
import { connect } from 'react-redux'
import { fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit  } from './actions/samplerActions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import logo from './assets/mpCloud-logo.png';
import NavBar from './components/NavBar'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      soundKits: [],
      currentSoundkit: null
    }
  }

  componentDidMount(){
    const soundKits = this.props.fetchSoundkits()
    this.props.clearCurrentSoundkit()
  }

  renderPadContainer = (context, analyser) => (
    this.props.soundKits.currentSoundkit ? <PadContainer analyser={analyser} context={context} currentSoundkit={this.props.soundKits.currentSoundkit} sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
  )

  render() {
    const context = new AudioContext()
    const analyser = context.createAnalyser()
    return (
      <Container className='mainContainer'>
      <NavBar history={this.props.history}/>
        <Row>
          <Col>
            <SoundKitContainer analyser={analyser} onChange={this.handleOnChange} history={this.props.history}/>
          </Col>
          <Col>
            <VizualizerContainer analyser={analyser} context={context} onChange={this.handleOnChange} history={this.props.history}/>
          </Col>
        </Row>
        <Row>
          {this.renderPadContainer(context, analyser)}
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  soundKits: state.soundKits,
  currentSoundkit: state.currentSoundkit
})

export default connect(mapStateToProps, {fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit})(App);

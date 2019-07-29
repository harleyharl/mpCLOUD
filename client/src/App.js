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

  renderPadContainer = (context) => (
    this.props.soundKits.currentSoundkit ? <PadContainer context={context} currentSoundkit={this.props.soundKits.currentSoundkit} sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
  )

  render() {
    const context = new AudioContext()
    return (
      <Container className='mainContainer'>
      <NavBar history={this.props.history}/>
        <Row>
          <Col>
            <SoundKitContainer onChange={this.handleOnChange} history={this.props.history}/>
          </Col>
          <Col>
            <VizualizerContainer context={context} onChange={this.handleOnChange} history={this.props.history}/>
          </Col>
        </Row>
        <Row>
          {this.renderPadContainer(context)}
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

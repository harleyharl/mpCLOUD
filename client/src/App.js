import React, { Component } from 'react';
import PadContainer from './containers/PadContainer'
import SoundKitContainer from './containers/SoundKitContainer'
import VisualizerContainer from './containers/VisualizerContainer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit  } from './actions/samplerActions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    if (this.props.soundKits.soundKits.length === 0) {
      this.props.fetchSoundkits()
    }
    this.props.clearCurrentSoundkit()
  }

  renderPadContainer(context, analyser){
    return (this.props.soundKits.currentSoundkit ? <PadContainer analyser={analyser} context={context} currentSoundkit={this.props.soundKits.currentSoundkit} sounds={this.props.soundKits.currentSoundkit.sounds} /> : null)
  }

  render() {
    const context = new AudioContext()
    const analyser = context.createAnalyser()
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className='mainContainer'>
          <Row className="spacer-normal">
            <Col>
              <SoundKitContainer key="soundkitContainer" history={this.props.history} analyser={analyser} onChange={this.handleOnChange} />
            </Col>
            <Col>
              <VisualizerContainer analyser={analyser} context={context} onChange={this.handleOnChange} />
            </Col>
          </Row>
          <Row className="spacer-normal">
            {this.renderPadContainer(context, analyser)}
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  soundKits: state.soundKits,
  // currentSoundkit: state.soundKits.currentSoundkit
})

export default withRouter(connect(mapStateToProps, {fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit})(App))

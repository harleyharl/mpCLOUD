import React, { Component } from 'react';
import PadContainer from './containers/PadContainer'
import SoundKitContainer from './containers/SoundKitContainer'
import { connect } from 'react-redux'
import { fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit  } from './actions/samplerActions'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      soundKits: [],
      currentSoundkit: null
    }
  }

  componentDidMount(){
    debugger
    const soundKits = this.props.fetchSoundkits()
    this.props.clearCurrentSoundkit()
    // debugger
    // this.setState({
    //   soundKits: soundKits,
    // })
  }



  renderPadContainer = () => (
    this.props.soundKits.currentSoundkit ? <PadContainer currentSoundkit={this.props.soundKits.currentSoundkit} sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
  )

  render() {
    return (
      <div className="App">
        <SoundKitContainer onChange={this.handleOnChange} history={this.props.history}/>
        {this.renderPadContainer()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  soundKits: state.soundKits,
  currentSoundkit: state.currentSoundkit
})

export default connect(mapStateToProps, {fetchSoundkits, fetchSounds, removeSoundkit, clearCurrentSoundkit})(App);

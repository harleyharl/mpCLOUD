import React, { Component } from 'react';
import PadContainer from './containers/PadContainer'
import SoundKitContainer from './containers/SoundKitContainer'
import { connect } from 'react-redux'
import { fetchSoundkits } from './actions/samplerActions'
import { fetchSounds } from './actions/samplerActions'
import './App.css';

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
    this.setState({
      soundKits: soundKits,
    })
  }



  renderPadContainer = () => (
    this.props.soundKits.currentSoundkit ? <PadContainer sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
  )

  render() {
    return (
      <div className="App">
        <SoundKitContainer onChange={this.handleOnChange} soundKits={this.props.soundKits}/>
        {this.renderPadContainer()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  soundKits: state.soundKits,
  currentSoundkit: state.currentSoundkit
})

export default connect(mapStateToProps, {fetchSoundkits, fetchSounds})(App);

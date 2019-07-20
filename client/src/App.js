import React, { Component } from 'react';
import PadContainer from './containers/PadContainer'
import SoundKitContainer from './containers/SoundKitContainer'
import SoundkitIndex from './components/Soundkit/Index'
import { connect } from 'react-redux'
import { fetchSoundkits, fetchSounds, removeSoundkit  } from './actions/samplerActions'
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
    const soundKits = this.props.fetchSoundkits()
    // debugger
    // this.setState({
    //   soundKits: soundKits,
    // })
  }



  renderPadContainer = () => (
    this.props.soundKits.currentSoundkit ? <PadContainer sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
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

export default connect(mapStateToProps, {fetchSoundkits, fetchSounds, removeSoundkit})(App);

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
      user: '',
      soundKits: [],
      currentSoundkit: null,
      recordings: []
    }
  }

  componentDidMount(){
    const soundKits = this.props.fetchSoundkits()
    this.setState({
      soundKits: soundKits,
    })
  } // pretty sure i don't need this here

  // renderPadContainer = () => {
  //   <PadContainer currentSoundkit={this.props.currentSoundkit}/>
  // }

  renderPadContainer = () => (

    this.props.soundKits.currentSoundkit ? <PadContainer sounds={this.props.soundKits.currentSoundkit.sounds} /> : "select a soundkit to load up the pads"
    // renderSoundkitSelector = () => this.props.soundKits.soundKits.map((soundkit) => <option key={soundkit.id} value={soundkit.id}>{soundkit.name}</option>)
)

  handleOnChange = event => {
    this.setState({
      currentSoundkit: event.target.value
    });
  }

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

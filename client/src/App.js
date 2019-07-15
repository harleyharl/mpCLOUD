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
    this.fileInput = React.createRef()
    this.state = {
      user: '',
      soundKits: [],
      currentSoundkit: null,
      recordings: [],
    }
  }

  componentDidMount(){
    const soundKits = this.props.fetchSoundkits()
    this.setState({
      soundKits: soundKits,
    })
  } // pretty sure i don't need this here



  renderPadContainer = () => (

    this.props.soundKits.currentSoundkit ? <PadContainer sounds={this.props.soundKits.currentSoundkit.sounds} /> : null
    // renderSoundkitSelector = () => this.props.soundKits.soundKits.map((soundkit) => <option key={soundkit.id} value={soundkit.id}>{soundkit.name}</option>)
)

  handleOnChange = event => {
    this.setState({
      currentSoundkit: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.fileInput.current.files)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          Build a soundkit here:
          <input type="file" ref={this.fileInput}/>
          <input type="submit" value="upload file"/>
        </form>
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

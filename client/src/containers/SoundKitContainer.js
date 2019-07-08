import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSounds } from '../actions/samplerActions'
import { setCurrentSoundkit } from '../actions/samplerActions'

class SoundKitContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      soundKits: [],
      currentSoundkit: null
    }
  }

  renderSoundkitSelector = () => this.props.soundKits.soundKits.map((soundkit) => <option key={soundkit.id} value={soundkit.id}>{soundkit.name}</option>)

  handleChange(event) {
    this.setState({currentSoundkit: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    alert("you have selected "+ this.state.currentSoundkit) //"you have selected "15""
    // const sounds = this.props.fetchSounds(this.state.currentSoundkit) //fetches the sounds from the soundkit
    var soundkit_id = parseInt(this.state.currentSoundkit) // why doesn't const work here??
    var soundkit = this.props.soundKits.soundKits[soundkit_id - 1]
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store 
    debugger
    // this.props.renderPadContainer() // need this to trigger the rendering of the pad container
  }

  render() {
    console.log(this.state.currentSoundkit)
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Pick your soundkit:
          <select value={this.state.value} onChange={event => this.handleChange(event)}>
            {this.renderSoundkitSelector()}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  soundKits: state.soundKits
})

export default connect(mapStateToProps, { fetchSounds, setCurrentSoundkit })(SoundKitContainer);

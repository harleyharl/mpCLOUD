import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSounds } from '../actions/samplerActions'
import { setCurrentSoundkit } from '../actions/samplerActions'
import SoundkitIndex from '../components/Soundkit/Index'

class SoundKitContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentSoundkit: null
    }
  }

  renderSoundkitSelector = () => this.props.soundKits.soundKits.map((soundkit) => <option key={soundkit.id} value={soundkit.id}>{soundkit.name}</option>)

  handleChange(event) {
    this.setState({currentSoundkit: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    var soundkit_id = parseInt(this.state.currentSoundkit) // this.state.currentSoundkit is a number here
    var soundkit = this.props.soundKits.soundKits[soundkit_id - 1]
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store
  }

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          <select value={this.state.value} onChange={event => this.handleChange(event)}>
          <option disabled selected value> -- select your soundkit -- </option>
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

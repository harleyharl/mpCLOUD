import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSoundkits, setCurrentSoundkit, fetchSounds, removeSoundkit  } from '../actions/samplerActions'

import SoundkitIndex from '../components/Soundkit/Index'
import axiosClient from '../axiosClient';


class SoundKitContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentSoundkit: null,
      soundKits: []
    }
  }

  componentDidMount() {
    debugger
      this.setState({ soundKits: this.props.soundKits });
  }

  renderSoundkitSelector = () => this.props.soundKits.soundKits.map((soundkit) => <option key={soundkit.id} value={soundkit.id}>{soundkit.name}</option>)

  handleChange(event) {
    this.setState({currentSoundkit: event.target.value})
  }

  handleSoundkitSelect(event) {
    alert('An id was submitted: ' + event.target.attributes.value.value);
    this.setState({currentSoundkit: event.target.attributes.value.value})
  }

  handleSubmit(event) {
    debugger
    event.preventDefault()
    var soundkit_id = parseInt(this.state.currentSoundkit) // this.state.currentSoundkit is a number here
    var soundkit = this.props.soundKits.soundKits[soundkit_id - 1]
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store
  }

  // render() {
  //   return (
  //     <div>
  //     <form onSubmit={event => this.handleSubmit(event)}>
  //       <label>
  //         <select value={this.state.value} onChange={event => this.handleChange(event)}>
  //         <option disabled selected value> -- select your soundkit -- </option>
  //           {this.renderSoundkitSelector()}
  //         </select>
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //     </div>
  //   );
  // }


  render() {
    return (
      <div className="SounkitIndex col-md-12" style={{ marginTop: 10 }}>
        <div className="clearfix">
          <div className="pull-right">
            <button
              onClick={e => this.handleNewSoundkit()}
              className="btn btn-success">
              New Soundkit
            </button>
          </div>
        </div>
        <div className="tableDiv">
        <table className="table">
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>
        </div>
        <button onClick={event => this.handleSubmit(event)}>
          click here to load up selected soundkit
        </button>
      </div>
    );
  }

  handleNewSoundkit() {
    console.log(this.props)
    this.props.history.push('/new');
  }

  renderTableBody() {
    if (this.props.soundKits.soundKits) {
      return this.props.soundKits.soundKits.map(soundkit => {
        return (
          <tr className="soundKitSelectorBox">
            <td value={soundkit.id} className="soundKitSelectorBox" onClick={event => this.handleSoundkitSelect(event)}>
              {soundkit.name}
            </td>
            <td>
              <button
                onClick={e => this.handleEdit(soundkit.id)}
                className="btn btn-primary">
                Edit
              </button>
              &nbsp;
              <button
                onClick={e => this.handleRemove(soundkit.id)}
                className="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  handleEdit(soundkitId) {
    this.props.history.push(`/soundkits/${soundkitId}/edit`);
  }

  handleRemove(soundkitId) {
    debugger
    // this.props.removeSoundkit(soundkitId)
    // var soundkits = this.props.soundKits.soundKits;
    // soundkits = soundkits.filter(soundkit => {
    //   return soundkit.id !== soundkitId;
    // });
    // this.setState({ ...this.state, soundKits: soundkits });
    this.props.removeSoundkit(soundkitId)
    }
  }

const mapStateToProps = state => ({
  //this is what gives the component access to the soundkits in the store
  soundKits: state.soundKits
})


export default connect(mapStateToProps, { fetchSounds, setCurrentSoundkit, removeSoundkit })(SoundKitContainer);

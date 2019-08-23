import React, { Component } from 'react';
import { setCurrentSoundkit, removeSoundkit  } from '../actions/samplerActions'
import Button from 'react-bootstrap/Button'
import './SoundkitContainer.css'

class Soundkit extends Component {

  state = {
    voteCount: 0
  }

  handleEdit(soundkitId) {
    this.props.history.push(`/soundkits/${soundkitId}/edit`);
  }
  //
  handleRemove(soundkitId) {
    debugger
    this.props.removeSoundkit(soundkitId)
    }

  handleLoad(soundkitId) {
    const soundkit = this.props.soundkit
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store
  }

  handleUpvote() {
    this.setState({
      voteCount: this.state.voteCount + 1
    })
  }

  render() {
    return (
        <li value={this.props.id} >
          <div className="align-center"><p>{this.props.soundkit.name}</p></div>
          <div className="buttons-container">
          <div className="button-container">
            <Button variant="outline-primary" onClick={e => this.handleUpvote()} ><p>Like</p></Button>
            <div>
              {this.state.voteCount}
            </div>
          </div>
            <div className="button-container">
              <Button variant="outline-primary" onClick={e => this.handleLoad(this.props.id)} ><p>Load</p></Button>
            </div>
            <div className="button-container">
              <Button variant="outline-warning" onClick={e => this.handleEdit(this.props.id)}> Edit </Button>
            </div>
            <div className="button-container">
              <Button variant="outline-danger" onClick={e => this.handleRemove(this.props.id)}> Remove </Button>
            </div>
          </div>
        </li>
    );
  }

}

export default Soundkit;

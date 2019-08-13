import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentSoundkit, removeSoundkit  } from '../actions/samplerActions'
import Button from 'react-bootstrap/Button'
import './SoundkitContainer.css'

class SoundKitContainer extends Component {

  handleNewSoundkit() {
    this.props.history.push('/new');
  }

  handleEdit(soundkitId) {
    this.props.history.push(`/soundkits/${soundkitId}/edit`);
  }

  handleRemove(soundkitId) {
    this.props.removeSoundkit(soundkitId)
    }

  handleLoad(soundkitId) {
    const soundkit = this.props.soundKits.soundKits.filter(soundkit => soundkit.id === soundkitId)[0]
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store
  }

  renderTableBody() {
    if (this.props.soundKits.soundKits) {
      return this.props.soundKits.soundKits.map(soundkit => {
        return (
            <li value={soundkit.id} >
              <div className="align-center"><p>{soundkit.name}</p></div>
              <div className="buttons-container">
                <div className="button-container">
                  <Button variant="outline-primary" onClick={e => this.handleLoad(soundkit.id)} ><p>Load</p></Button>
                </div>
                <div className="button-container">
                  <Button variant="outline-warning" onClick={e => this.handleEdit(soundkit.id)}> Edit </Button>
                </div>
                <div className="button-container">
                  <Button variant="outline-danger" onClick={e => this.handleRemove(soundkit.id)}> Remove </Button>
                </div>
              </div>
            </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="soundkitContainer">
        <ul className="soundKitList">
            {this.renderTableBody()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  soundKits: state.soundKits,
  currentSoundkit: state.soundKits.currentSoundkit
})


export default connect(mapStateToProps, { setCurrentSoundkit, removeSoundkit })(SoundKitContainer);

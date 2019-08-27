import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentSoundkit, removeSoundkit  } from '../actions/samplerActions'
import Button from 'react-bootstrap/Button'
import './SoundkitContainer.css'
import Soundkit from './Soundkit.js'

import FadeLoader from 'react-spinners/FadeLoader';

import { css } from '@emotion/core';

class SoundKitContainer extends Component {


  handleNewSoundkit() {
    this.props.history.push('/new');
  }

  renderTableBody() {
    debugger
    if (this.props.loading === true) {
      return (<div className="align-center">
      <div className="loader">
        <FadeLoader sizeUnit={"px"} size={150} color={'#600473'} loading={this.props.loading}
      />
      </div>
      <div className="loader">
      loading soundkits...
      </div>
    </div>)
    } else {
      return this.props.soundKits.map(soundkit => {
        return (
          <Soundkit id={soundkit.id} soundkit={soundkit} setCurrentSoundkit={this.props.setCurrentSoundkit} history={this.props.history} removeSoundkit={this.props.removeSoundkit}/>
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
  soundKits: state.soundKits.soundKits,
  currentSoundkit: state.soundKits.currentSoundkit,
  loading: state.soundKits.loading
})


export default connect(mapStateToProps, { setCurrentSoundkit, removeSoundkit })(SoundKitContainer);

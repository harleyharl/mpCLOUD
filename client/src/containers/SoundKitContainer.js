import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSoundkits, setCurrentSoundkit, fetchSounds, removeSoundkit  } from '../actions/samplerActions'
import axiosClient from '../axiosClient';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './SoundkitContainer.css'

class SoundKitContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentSoundkit: null,
      soundKits: []
    }
  }

  componentDidMount() {
      this.setState({ soundKits: this.props.soundKits,
        currentSoundkit: null
      });
  }

  handleChange(event) {
    this.setState({currentSoundkit: event.target.value})
  }

  render() {
    return (
      <div>
        <Table className='soundkitContainer' striped borderless hover variant="dark">
            <tbody>
              {this.renderTableBody()}
            </tbody>
        </Table>
      </div>
    );
  }

  handleNewSoundkit() {
    this.props.history.push('/new');
  }

  renderTableBody() {
    if (this.props.soundKits.soundKits) {
      return this.props.soundKits.soundKits.map(soundkit => {
        return (
          <tr>
            <td value={soundkit.id} onClick={event => this.handleSoundkitSelect(event)}>
              {soundkit.name}
            </td>
            <td>
              <Button variant="outline-primary" onClick={e => this.handleLoad(soundkit.id)}> Load </Button>
            </td>
            <td>
              <Button variant="outline-warning" onClick={e => this.handleEdit(soundkit.id)}> Edit </Button>
            </td>
            <td>
              <Button variant="outline-danger" onClick={e => this.handleRemove(soundkit.id)}> Remove </Button>
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
    this.props.removeSoundkit(soundkitId)
    }

  handleLoad(soundkitId) {
    var soundkit = this.props.soundKits.soundKits.filter(soundkit => soundkit.id === soundkitId)[0]
    this.props.setCurrentSoundkit(soundkit) // passes the soundkit selected up to the store
  }
}



const mapStateToProps = state => ({
  //this is what gives the component access to the soundkits in the store
  soundKits: state.soundKits,
  currentSoundkit: state.soundKits.currentSoundkit
})


export default connect(mapStateToProps, { fetchSounds, setCurrentSoundkit, removeSoundkit })(SoundKitContainer);

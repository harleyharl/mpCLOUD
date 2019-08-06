import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentSoundkit, fetchSounds, removeSoundkit  } from '../actions/samplerActions'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './SoundkitContainer.css'
import 'bootstrap/dist/css/bootstrap.css';


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
      <div className="soundkitContainer">
        <ul className="soundKitList">
            {this.renderTableBody()}
        </ul>
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
  soundKits: state.soundKits,
  currentSoundkit: state.soundKits.currentSoundkit
})


export default connect(mapStateToProps, { fetchSounds, setCurrentSoundkit, removeSoundkit })(SoundKitContainer);

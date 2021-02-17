import './index.css';
import React, { Component } from 'react';
import axiosClient from '../../../axiosClient';
import soundImage from '../../../images/soundImage.png'
import { connect } from 'react-redux'
import { addNewSoundkit, editSoundkit } from '../../../actions/samplerActions.js'

class SoundkitForm extends Component {

  state = {
    selectedSoundkitSoundFiles: [],
    isSubmittingForm: false,
    soundkit: {
      id: this.props.match.params.id,
      name: '',
      description: ''
    },
    descriptionError: '',
    nameError: '',
    fileError: ''
  };

  componentDidMount() {
    if (this.props.match.params.id) { // could change this to a fetch request...
      const soundkit = this.props.soundKits.filter(soundkit => (soundkit.id == this.props.match.params.id))[0]
      this.setState({
        selectedSoundkitSoundFiles: soundkit.sounds,
        soundkit: {
          id: soundkit.id,
          name: soundkit.name,
          description: soundkit.description,
        }
      });
    }
  }

  handleSoundkitNameChange(e) {
    let { soundkit } = this.state;
    soundkit.name = e.target.value;
    this.setNameErrors()
    this.setState({ soundkit: soundkit });
  }

  handleSoundkitDescriptionChange(e) {
    let { soundkit } = this.state;
    soundkit.description = e.target.value;
    this.setDescriptionErrors()
    this.setState({ soundkit: soundkit });
  }

  handleSoundkitSoundsChange() {

    if (this.soundkitSoundsField.files.length < 17) {
      this.setState({fileError: ""})
      let selectedFiles = this.soundkitSoundsField.files;
      let { selectedSoundkitSoundFiles } = this.state;
      for (let i = 0; i < selectedFiles.length; i++) {
        selectedSoundkitSoundFiles.push(selectedFiles.item(i));
      }
      this.setState(
        {
          selectedSoundkitSoundFiles: selectedSoundkitSoundFiles
        },
        () => {
          this.soundkitSoundsField.value = null;
        }
      );
    } else {
      this.setState({fileError: "Please select a maximum of 16 files."})
    }
  }

  handleFormSubmit() {
    let nameError = this.state.nameError
    let descriptionError = this.state.descriptionError
    if (!nameError && !descriptionError) {
      let { soundkit } = this.state;
      this.setState(
        {
          isSubmittingForm: true,
          soundkit: soundkit
        },
        () => {
          this.submitForm();
        }
      );
    }
  }

  buildFormData() {
    let formData = new FormData();
    formData.append('soundkit[name]', this.state.soundkit.name);
    formData.append('soundkit[description]', this.state.soundkit.description);
    let selectedSoundkitSoundFiles = this.state.selectedSoundkitSoundFiles;
    for (let i = 0; i < selectedSoundkitSoundFiles.length; i++) {
      let file = selectedSoundkitSoundFiles[i];
      if (file.id) {
        if (file._destroy) {
          formData.append(`soundkit[sounds_attributes][${i}][id]`, file.id);
          formData.append(`soundkit[sounds_attributes][${i}][_destroy]`, '1');
        }
      } else {
        formData.append(
          `soundkit[sounds_attributes][${i}][sound_file]`,
          file,
          file.name
        );
        formData.append(
          `soundkit[sounds_attributes][${i}][name]`,
          file.name
        )
      }
    }
    return formData;
  }

  submitForm() {
    let submitMethod = this.state.soundkit.id ? 'patch' : 'post';
    let url = this.state.soundkit.id
      ? `/soundkits/${this.state.soundkit.id}.json`
      : 'api/soundkits.json';
    let formData = this.buildFormData()
    let history = this.props.history

    if (submitMethod === 'post' || submitMethod === 'POST' ) {
      this.props.addNewSoundkit(url, submitMethod, formData, history)
    } else if (submitMethod === 'patch' || submitMethod === 'PATCH'){
      this.props.editSoundkit(url, submitMethod, formData, history, this.state.soundkit.id)
    }
  }

  handleCancel() {
    this.props.history.push('/');
  }

  removeSelectedSoundkitSoundFile(sound, index) { //marks sound file with _destroy when its clicked
  let { selectedSoundkitSoundFiles } = this.state;
  if (sound.id) { // cover file that has been uploaded will be marked as destroy
    selectedSoundkitSoundFiles[index]._destroy = true;
  } else {
    selectedSoundkitSoundFiles.splice(index, 1);
  }

  this.setState({
    selectedSoundkitSoundFiles: selectedSoundkitSoundFiles
  });
}

  getNumberOfSelectedFiles() {
    return this.state.selectedSoundkitSoundFiles.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  renderUploadSoundsButton() {
    let numberOfSelectedSounds = this.getNumberOfSelectedFiles();
    return (
      <div>
        <input
          name="sounds[]"
          ref={field => (this.soundkitSoundsField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          multiple={true}
          accept="audio/*"
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1
          }}
          id="soundkit_sounds"
          onChange={e => this.handleSoundkitSoundsChange(e)}
          className="form-control"
        />
        <label
          disabled={this.state.isSubmittingForm}
          className="btn btn-outline-primary"
          htmlFor="soundkit_sounds">
          {numberOfSelectedSounds === 0
            ? 'Upload Files'
            : `${numberOfSelectedSounds} file${numberOfSelectedSounds !== 1
                ? 's'
                : ''} selected`}
        </label>
      </div>
    );
  }

  renderSelectedSoundkitSoundFiles() { //rerenders after a delete
    let fileDOMs = this.state.selectedSoundkitSoundFiles.map((el, index) => {
      if (el._destroy) { // we use _destroy to mark the removed sound
        return null;
      }
      return (
        <li key={index}>
          <div className="sound">
            <img
              alt="Sound File"
              width={150}
              src={soundImage}
              style={{ alignSelf: 'center' }}
            />
            <div
              className="remove"
              onClick={() => this.removeSelectedSoundkitSoundFile(el, index)}>
              <div className="removeButton">x</div>
            </div>
          </div>
          <div className="file-name">
            {el.name}
          </div>
        </li>
      );
    });
    return (
      <ul className="selected-sounds">
        {fileDOMs}
      </ul>
    );
  }

  isFormValid() {
    // returns false if there are any errors or form is submitting
    return (!!this.state.descriptionError || !!this.state.nameError || !!this.state.isSubmittingForm || this.isAFieldEmpty())
  }

  isAFieldEmpty() {
    // returns true if one or both fields are empty
    let description = this.state.soundkit.description
    let name = this.state.soundkit.name
    return (name.length === 0 || description.length === 0)
  }

  setNameErrors() {
    if (this.state.soundkit.name === "") {
        this.setState({nameError: "please enter a name for this soundkit"})
      } else if (this.state.soundkit.name.length > 10) {
        this.setState({nameError: "You must enter a shorter name for this soundkit"})
      } else {
        this.setState({nameError: ""})
      }
  }

  setDescriptionErrors() {
    if (this.state.soundkit.description === "") {
        this.setState({descriptionError: "please enter a description for this soundkit"})
      } else if (this.state.soundkit.description.length > 30) {
        this.setState({descriptionError: "You must enter a shorter description for this soundkit"})
      } else {
        this.setState({descriptionError: ""})
      }
  }

  renderSoundkitNameInlineError() {
    return (
      <div>
        {this.state.nameError}
      </div>
    )
  }

  renderSoundkitDescriptionInlineError() {
    return (
      <div>
        {this.state.descriptionError}
      </div>
    );
  }

  renderFileInlineError() {
    return (
      <div>
        {this.state.fileError}
      </div>
    );
  }

  render() {
    return (
      <div className="SoundkitForm">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              onChange={e => this.handleSoundkitNameChange(e)}
              value={this.state.soundkit.name}
              className="form-control"
            />
            {this.renderSoundkitNameInlineError()}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              onChange={e => this.handleSoundkitDescriptionChange(e)}
              value={this.state.soundkit.description}
              className="form-control"
            />
            {this.renderSoundkitDescriptionInlineError()}
          </div>
          <div className="form-group">
            {this.renderFileInlineError()}
            {this.renderUploadSoundsButton()}
            {this.renderSelectedSoundkitSoundFiles()}
          </div>
          <button
            id="saveButton"
            disabled={this.isFormValid()}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-outline-warning form-button">
            {this.state.isSubmittingForm ? 'Saving...' : 'Save'}
          </button>
          &nbsp;
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleCancel()}
            className="btn btn-outline-danger form-button">
            Cancel
          </button>
        </form>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  soundKits: state.soundKits.soundKits
})

export default connect( mapStateToProps, { addNewSoundkit, editSoundkit } )(SoundkitForm)

import './index.css';
import React, { Component } from 'react';
import axiosClient from '../../../axiosClient';
// const axios = require('axios');


class SoundkitForm extends Component {

  state = {
    selectedSoundkitSoundFiles: [],
    submitFormProgress: 0,
    isSubmittingForm: false,
    didFormSubmissionComplete: false,
    soundkit: {
      id: this.props.match.params.id,
      name: '',
      description: '',
      errors: {}
    }
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      axiosClient.get(`/soundkits/${this.props.match.params.id}`).then(response => {
        this.setState({
          selectedSoundkitSoundFiles: response.data.sound_files,
          soundkit: {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            errors: {}
          }
        });
      });
    }
  }

  handleSoundkitNameChange(e) {
  let { soundkit } = this.state;
  soundkit.name = e.target.value;
  this.setState({ soundkit: soundkit });
}

handleSoundkitDescriptionChange(e) {
  let { soundkit } = this.state;
  soundkit.description = e.target.value;
  this.setState({ soundkit: soundkit });
}

renderSoundkitNameInlineError() {
  if (this.state.soundkit.errors.name) {
    return (
      <div className="inline-error alert alert-danger">
        {this.state.soundkit.errors.name.join(', ')}
      </div>
    );
  } else {
    return null;
  }
}

renderSoundkitDescriptionInlineError() {
  if (this.state.soundkit.errors.description) {
    return (
      <div className="inline-error alert alert-danger">
        {this.state.soundkit.errors.description.join(', ')}
      </div>
    );
  } else {
    return null;
  }
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
        className="btn btn-success"
        htmlFor="soundkit_sounds">
        <span className="glyphicon glyphicon-cloud-upload" />
        &nbsp; &nbsp;
        {numberOfSelectedSounds === 0
          ? 'Upload Files'
          : `${numberOfSelectedSounds} file${numberOfSelectedSounds !== 1
              ? 's'
              : ''} selected`}
      </label>
    </div>
  );
}

handleSoundkitSoundsChange() {
  let selectedFiles = this.soundkitSoundsField.files;
  let { selectedSoundkitSoundFiles } = this.state;
  for (let i = 0; i < selectedFiles.length; i++) {
    selectedSoundkitSoundFiles.push(selectedFiles.item(i));
  } //end for

  this.setState(
    {
      selectedSoundkitSoundFiles: selectedSoundkitSoundFiles
    },
    () => {
      this.soundkitSoundsField.value = null;
    }
  );
}

renderSelectedSoundkitSoundFiles() {
  let fileDOMs = this.state.selectedSoundkitSoundFiles.map((el, index) => {
    if (el._destroy) { // we use _destroy to mark the removed sound
      return null;
    }

    return (
      <li key={index}>
        <div className="sound">
          <img
            width={150}
            src={el.id ? el.url : URL.createObjectURL(el)}
            style={{ alignSelf: 'center' }}
          />
          <div
            className="remove"
            onClick={() => this.removeSelectedSoundkitSoundFile(el, index)}>
            <span style={{ top: 2 }} className="glyphicon glyphicon-remove" />
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


removeSelectedSoundkitSoundFile(sound, index) {
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

handleCancel() {
  this.props.history.push('/soundkits');
}

handleFormSubmit() {
  debugger
  let { soundkit } = this.state;
  soundkit.errors = {};
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

buildFormData() {
  var formData = new FormData();
  formData.append('soundkit[name]', this.state.soundkit.name);
  formData.append('soundkit[description]', this.state.soundkit.description);
// debugger. for some reason "let" doesn't work here!
  var { selectedSoundkitSoundFiles } = this.state;
  for (let i = 0; i < selectedSoundkitSoundFiles.length; i++) {
    var file = selectedSoundkitSoundFiles[i];
    if (file.id) {
      if (file._destroy) {
        formData.append(`soundkit[sounds_attributes][${i}][id]`, file.id); // this will be annoying
        formData.append(`soundkit[sounds_attributes][${i}][_destroy]`, '1'); // this is going to be annoying..
      }
    } else {
      formData.append(
        `soundkit[sounds_attributes][${i}][sound_file]`,
        file,
        file.name
      );
    }
  }
  return formData;
}

submitForm() {
  // debugger
  let submitMethod = this.state.soundkit.id ? 'patch' : 'post'; //checks whether we are editing or adding

  let url = this.state.soundkit.id
    ? `/soundkits/${this.state.soundkit.id}.json`
    : '/soundkits.json';
  axiosClient[submitMethod](url, this.buildFormData(), {
      onUploadProgress: progressEvent => {
        let percentage = progressEvent.loaded * 100.0 / progressEvent.total;
        this.setState({
          submitFormProgress: percentage
        });
      }
    })
    .then(response => {
      this.setState({
        didFormSubmissionComplete: true
      });
      this.props.history.push('/soundkits');
    })
    .catch(error => {
      let { soundkit } = this.state;
      soundkit.errors = error.response.data;
      this.setState({
        isSubmittingForm: false,
        submitFormProgress: 0,
        soundkit: soundkit
      });
    });
}

renderUploadFormProgress() {
  if (this.state.isSubmittingForm === false) {
    return null;
  }

  return (
    <div className="progress">
      <div
        className={
          'progress-bar progress-bar-info progress-bar-striped' +
          (this.state.submitFormProgress < 100 ? 'active' : '')
        }
        role="progressbar"
        aria-valuenow={this.state.submitFormProgress}
        areaValuemin="0"
        areaValuemax="100"
        style={{ width: this.state.submitFormProgress + '%' }}>
        {this.state.submitFormProgress}% Complete
      </div>
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
            <label>Sounds</label>
            {this.renderUploadSoundsButton()}
            {this.renderSelectedSoundkitSoundFiles()}
          </div>

          {this.renderUploadFormProgress()}

          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            {this.state.isSubmittingForm ? 'Saving...' : 'Save'}
          </button>
          &nbsp;
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleCancel()}
            className="btn btn-default">
            Cancel
          </button>

        </form>
        <br />
      </div>
    );
  }

}

export default SoundkitForm;

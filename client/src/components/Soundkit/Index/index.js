import React, { Component } from 'react';
import axiosClient from '../../../axiosClient';

class SoundkitIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { soundkits: [] };
  }

  componentWillMount() {
    axiosClient.get('/soundkits.json').then(response => {
      debugger
      this.setState({ soundkits: response.data });
    });
  }

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
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>
      </div>
    );
  }

  handleNewSoundkit() {
    this.props.history.push('/soundkits/new');
  }

  renderTableBody() {
    // added conditional to stop error when there are no soundkits
    if (this.state.soundkits) {
      return this.state.soundkits.map(soundkit => {
        return (
          <tr key={soundkit.id}>
            <td>
              {soundkit.id}
            </td>
            <td>
              {soundkit.name}
            </td>
            <td>
              {soundkit.description}
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
    let soundkits = this.state.soundkits;
    soundkits = soundkits.filter(soundkit => {
      return soundkit.id !== soundkitId;
    });
    this.setState({ soundkits: soundkits });
    axiosClient.delete(`/soundkits/${soundkitId}`);
  }
}

export default SoundkitIndex;

import React from 'react';
import SoundkitForm from '../Form/index';
import './index.css'
import NavBar from '../../NavBar'

const SoundkitEdit = (props) => {
    return (
      <div>
        <NavBar history={props.history}/>
        <div className="SoundkitEdit">
          <h2>Edit Soundkit</h2>
          <SoundkitForm history={props.history} match={props.match} />
        </div>
      </div>
    );
}

export default SoundkitEdit;

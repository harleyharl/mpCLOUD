export function fetchSoundkits() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SOUNDKITS' });
    return fetch('/api/soundkits')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_SOUNDKITS', payload: json}));
  };
}

export function fetchSounds(soundkit_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SOUNDS' });
    return fetch(`/api/soundkits/${soundkit_id}`)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_SOUNDS', payload: json}));
  };
}

export function setCurrentSoundkit(soundkit) {
  return (dispatch) => {
    dispatch({ type: 'SET_CURRENT_SOUNDKIT', payload: soundkit })
  };
}

export function removeSoundkit(soundkitId, data={}) {
  return (dispatch) => {
    return fetch(`/api/soundkits/${soundkitId}`, {
        method: 'DELETE',
        body: JSON.stringify(data),
    })
    .then(response => response.json()) 
    .then(json => dispatch({ type: 'REMOVE_SOUNDKIT', payload: json}))
  }
}

export function clearCurrentSoundkit() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_CURRENT_SOUNDKIT' })
  };
}

export function setCurrentSound(soundUrl) {
  return (dispatch) => {
    dispatch({ type: 'SET_CURRENT_SOUND', soundUrl })
  };
}

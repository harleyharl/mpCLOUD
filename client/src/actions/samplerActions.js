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
    debugger
    dispatch({ type: 'SET_CURRENT_SOUNDKIT', payload: soundkit })
  };
}

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

// export function removeSoundkit(soundkitId) {
//   return (dispatch) => {
//     debugger
//     dispatch({ type: 'REMOVE_SOUNDKIT' })
//     return fetch(`/api/soundkits/${soundkit_id}`)
//       .then(response => response.json())
//       .then(json => dispatch({ type: 'REMOVE_SOUNDKIT', payload: json}));
//   }
// }


export function removeSoundkit(soundkitId, data={}) {
  return (dispatch) => {
    return fetch(`/api/soundkits/${soundkitId}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses JSON response into native JavaScript objects
    .then(json => dispatch({ type: 'REMOVE_SOUNDKIT', payload: json}))
  }
}


// function postData(url = '', data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native JavaScript objects
// }

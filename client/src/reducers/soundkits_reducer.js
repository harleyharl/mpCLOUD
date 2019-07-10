export default function soundkitsReducer(state = {
  loading: false,
  soundKits: [],
  currentSoundkit: null
}, action) {

  switch (action.type) {

    case 'LOADING_SOUNDKITS':
    return {...state, loading:true}

    case 'FETCH_SOUNDKITS':
    return { ...state, soundKits: action.payload, loading: false }

    case 'LOADING_SOUNDS':
    return {...state, loading:true}

    case 'SET_CURRENT_SOUNDKIT':
    return { ...state, currentSoundkit: action.payload, loading: false }

  default:
    return state;
  };
}

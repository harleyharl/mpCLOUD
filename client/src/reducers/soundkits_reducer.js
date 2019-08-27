export default function soundkitsReducer(state = {
  loading: false,
  soundKits: [],
  currentSoundkit: null,
  currentSound: null
}, action) {

  switch (action.type) {

    case 'LOADING_SOUNDKITS':
    return {...state, loading: true}

    case 'FETCH_SOUNDKITS':
    return { ...state, soundKits: action.payload, loading: false }

    case 'LOADING_SOUNDS':
    return {...state, loading: true}

    case 'SET_CURRENT_SOUNDKIT':
    return { ...state, currentSoundkit: action.payload, loading: false }

    case 'REMOVE_SOUNDKIT':
    return {...state, soundKits: state.soundKits.filter(soundKit => soundKit.id !== action.payload.id)}

    case 'CLEAR_CURRENT_SOUNDKIT':
    return {...state, currentSoundkit: null}

    case 'SET_CURRENT_SOUND':
    return { ...state, currentSound: action.soundUrl}

    case 'ADDING_SOUNDKIT':
    return {...state, loading: true }

    case 'ADD_NEW_SOUNDKIT':
    return {...state, soundKits: [...state.soundKits, action.payload], loading: false}

    case 'EDITING_SOUNDKIT':
    return {...state, loading: true}

    case 'EDIT_SOUNDKIT':
    debugger
    return {...state, loading: false, soundKits: state.soundKits.map(soundkit => {
        if (soundkit.id === action.payload.data.id) {
          return action.payload.data
        } else {
          return soundkit
        }
      })
    }

  default:
    return state;
  };
}

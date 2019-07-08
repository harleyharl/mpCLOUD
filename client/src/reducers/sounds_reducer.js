export default function soundsReducer(state = {
  loading: false,
  currentSounds: []
}, action) {

  switch (action.type) {

    case 'LOADING_SOUNDS':
    return {...state, loading:true}

    case 'FETCH_SOUNDS':
    return { ...state, currentSounds: action.payload, loading: false }

  default:
    return state;
  };
}

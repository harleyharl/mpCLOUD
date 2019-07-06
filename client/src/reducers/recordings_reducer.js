export default function recordingsReducer(state = {
  loading: false,
  recordings: []
}, action) {

  switch (action.type) {
  //
  //   case 'LOADING_CATS':
  //   return {...state, loading:true}
  //
  //   case 'FETCH_CATS':
  //   // debugger
  //   return { ...state, pictures: action.payload, loading: false }
  //
  default:
    return state;
  };
}

import { combineReducers } from "redux";
import recordingsReducer from './recordings_reducer'

const rootReducer = combineReducers({
  recordings: recordingsReducer
});

export default rootReducer;

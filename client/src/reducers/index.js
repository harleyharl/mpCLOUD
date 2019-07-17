import { combineReducers } from "redux";
import soundkitsReducer from './soundkits_reducer'

const rootReducer = combineReducers({
  soundKits: soundkitsReducer,
});

export default rootReducer;

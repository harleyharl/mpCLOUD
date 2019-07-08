import { combineReducers } from "redux";
import soundkitsReducer from './soundkits_reducer'
import soundsReducer from './sounds_reducer'

const rootReducer = combineReducers({
  soundKits: soundkitsReducer,
  currentSounds: soundsReducer 
});

export default rootReducer;

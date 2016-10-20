import { combineReducers } from 'redux';
import shapes from './shape';
import selectedMap from './selected-map';
import score from './score';

const rootReducer = combineReducers({
  selectedMap,
  shapes,
  score
});

export default rootReducer;

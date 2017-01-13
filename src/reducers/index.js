import { combineReducers } from 'redux';
import shapes from './shape';
import selectedMap from './selected-map';
import game from './game';

const rootReducer = combineReducers({
  selectedMap,
  game,
  shapes
});

export default rootReducer;

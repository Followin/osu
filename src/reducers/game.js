import * as actionTypes from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.START_GAME:
      return { score: 0, startTime: new Date() };
    case actionTypes.HIT:
      return { ...state, score: state.score + 1 };
  }

  return state;
}

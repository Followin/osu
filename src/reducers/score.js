import * as actionTypes from '../actions/types';

export default function(state = 0, action) {
  switch(action.type) {
    case actionTypes.HIT:
      return state + 1;
  }

  return state;
}

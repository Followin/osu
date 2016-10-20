import * as actionTypes from '../actions/types';


export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.PUSH_SHAPE:
      return {...state, circles: [ ...state.circles, action.payload ]};
    case actionTypes.TIMEOUT:
    case actionTypes.HIT:
      return {...state, circles: state.circles.filter(x => x.id !== action.payload) };
  }

  return state;
}

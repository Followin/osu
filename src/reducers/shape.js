import * as actionTypes from '../actions/types';


export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.PUSH_SHAPE:
      action.payload.pushtime = new Date().getTime();
      return {...state, circles: [ ...state.circles, action.payload ]};
    case actionTypes.TIMEOUT:
      return {...state, circles: state.circles.filter(x => x.id !== action.payload) };
    case actionTypes.HIT:
      console.log(action.payload.deviation);
      return {...state, circles: state.circles.filter(x => x.id !== action.payload.id) };
  }

  return state;
}

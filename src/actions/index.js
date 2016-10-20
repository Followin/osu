import * as types from './types';

export function startGame(map) {
  return (dispatch) => {
    for(let timePoint in map) {
      setTimeout(() => {
        dispatch({
          type: types.PUSH_SHAPE,
          payload: map[timePoint]
        });
        setTimeout(() => {
          dispatch({
            type: types.TIMEOUT,
            payload: map[timePoint].id
          });
        }, map[timePoint].duration);
      }, timePoint);
    }
  }
}

export function hit(id) {
  return {
    type: types.HIT,
    payload: id
  }
}

import * as types from './types';

export function startGame(map) {
  var startTime = new Date().getTime();
  console.log(`game started on ${startTime}`);

  return (dispatch) => {
    dispatch({
      type: types.START_GAME
    });

    for(let timePoint in map.points) {
      let time = Number.parseInt(timePoint);
      let shape = map.points[timePoint];

      setTimeout(() => {
        var currentTime = new Date().getTime();
        var delay = currentTime - startTime;
        console.log(`push ${shape.id} on ${currentTime} with delay of ${delay}`);
        dispatch({
          type: types.PUSH_SHAPE,
          payload: shape
        });

        setTimeout(() => {
        console.log("pop", shape.id);
          dispatch({
            type: types.TIMEOUT,
            payload: shape.id
          });
        }, map.options.delay.positive + map.options.delay.negative);

      }, time - map.options.delay.positive);
    }
  }
}

export function hit(obj) {
  return {
    type: types.HIT,
    payload: obj
  }
}

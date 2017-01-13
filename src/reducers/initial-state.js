import random from '../utils/random';

const positiveDelay = 500;
const negativeDelay = 1000;

let selectedMap = {
  points: Object.create(null),
  options: {
    delay: {
      positive: positiveDelay,
      negative: negativeDelay
    }
  }
};

for(let i = 1; i < 20; i++) {
  const time = i * positiveDelay;
  selectedMap.points[time] = {
    id: i,
    x: random.number(50, 800),
    y: random.number(50, 500),
    time 
  }
}

export default {
  selectedMap,
  shapes: {
    circles: [] 
  }
}

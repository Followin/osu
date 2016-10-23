import random from '../utils/random';

let selectedMap = Object.create(null);
for(let i = 0; i < 20; i++) {
  selectedMap[i * 1000] = {
    id: i,
    x: random.number(50, 800),
    y: random.number(50, 500),
    duration: 10000 
  }
}

export default {
  selectedMap,
  shapes: {
    circles: [] 
  }
}

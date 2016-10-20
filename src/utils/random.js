export default class Random {
  static number(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  static hexColor() {
    let color = 
      Random.number(0, 255).toString(16) 
      + Random.number(0, 255).toString(16) 
      + Random.number(0, 255).toString(16);  

    return color;
  }
}

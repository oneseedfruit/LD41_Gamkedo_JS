class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.centerX = width/2;
    this.centerY = height/2;
  }

  drawCar(){
    colorRect(this.x, this.y, this.width, this.height, 'orange');
  }

  moveCar(){

  }

}

class Fighter {
  constructor(name, health, attack, x, y) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;
    this.offset = 0;
    this.moveSpeed = 50;
  }

  draw() {
    if (this.offset === 0) {
      image(f_idle, this.x + this.offset, this.y, this.width, this.height);
    } else if (this.offset > 0) {
      image(f_right, this.x + this.offset, this.y, this.width, this.height);
    } else if (this.offset < 0) {
      image(f_left, this.x + this.offset, this.y, this.width, this.height);
    }
  }

  moveLeft() {
    if (this.offset === 0) {
      this.offset = -this.moveSpeed;
    }
  }

  moveRight() {
    if (this.offset === 0) {
      this.offset = this.moveSpeed; 
    }
  }

  moveCenter(){
    this.offset = 0;
  }

  update() {
    this.draw();
  }
}

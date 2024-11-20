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
    fill(255, 0, 0);  
    rect(this.x + this.offset, this.y, this.width, this.height);  // Dibuja el rectángulo en la posición con el offset
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

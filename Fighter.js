class Fighter {
  constructor(name, health, attack, x, y) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.x = x;
    this.y = y;
    this.offset = 0;
    this.sprite = f_idle;
    this.isPunching = false;
    this.punchTimer = 0;
  }

  draw() {
    image(this.sprite, this.x + this.offset, this.y);
  }

  moveLeft() {
    this.sprite = f_left;
    this.offset = -50;
  }

  moveRight() {
    this.sprite = f_right;
    this.offset = 50;
  }

  moveCenter() {
    this.sprite = f_idle;
    this.offset = 0;
  }

  punch() {
    if (!this.isPunching) { 
      this.sprite = f_punch;
      this.isPunching = true;
      this.punchTimer = 7; 
    }
  }

  update() {
    if (this.isPunching) {
      this.punchTimer--;
      if (this.punchTimer <= 0) {
        this.isPunching = false;
        this.moveCenter();
      }
    }
    this.draw();
  }
}

class Fighter {
  constructor(name, health, attack, x, y, sprites) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.x = x;
    this.y = y;
    this.offset = 0;
    this.sprites = sprites;
    this.sprite = this.sprites.idle; 
    this.isPunching = false;
    this.punchTimer = 0;
  }

  draw() {
    image(this.sprite, this.x + this.offset, this.y);
  }

  moveLeft() {
    this.sprite = this.sprites.left;
    this.offset = -50;
  }

  moveRight() {
    this.sprite = this.sprites.right; 
    this.offset = 50;
  }

  moveCenter() {
    this.sprite = this.sprites.idle;
    this.offset = 0;
  }

  punch() {
    if (!this.isPunching) {
      this.sprite = this.sprites.punch;
      this.isPunching = true;
      this.punchTimer = 7;
    }
  }
  punch() {
    if (!this.isPunching) {
      this.sprite = this.sprites.punch;
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
    if (this.isPunching){
      
    }
  }
}

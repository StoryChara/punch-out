class HealthBar {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  update(health) {
    fill(this.color);
    rect(this.x, this.y, this.w * (health / 100), this.h);
    noFill();
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

function displayRoundWins() {
  fill(255);
  textSize(16);
  text(`Player Wins: ${playerWins}`, 20, 40);
  text(`Enemy Wins: ${enemyWins}`, width - 140, 40);
}

class Fighter {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive() {
    return this.health > 0;
  }

  attackOpponent(opponent) {
    opponent.takeDamage(this.attack);
  }
}

class Fighter {
  constructor(name, health, attack, stamina, x, y, sprites, CPU) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.stamina = stamina;
    this.x = x;
    this.y = y;
    this.offset = 0;
    this.sprites = sprites;
    this.sprite = this.sprites.idle;
    this.isPunching = false;
    this.isBlocking = false;
    this.state = 'idle';
    this.CPU = CPU;
    this.actionCooldown = 0;
  }

  draw() {
    image(this.sprite, this.x + this.offset, this.y);
  }
  
  getHealth(){
    return this.health;
  }

  moveLeft() {
    this.sprite = this.sprites.left;
    this.offset = -50;
    this.state = 'dodging';
  }

  moveRight() {
    this.sprite = this.sprites.right;
    this.offset = 50;
    this.state = 'dodging';
  }

  moveCenter() {
    this.sprite = this.sprites.idle;
    this.offset = 0;
    this.state = 'idle';
    this.isPunching = false;
    this.isBlocking = false;
    this.stunTimer = 0;
    if (this.stamina < 25) {
      this.stamina += deltaTime * 0.1;
    }
    
  }

  punch() {
    if (!this.isPunching && this.state == 'idle') {
      this.sprite = this.sprites.punch;
      this.isPunching = true;
      this.punchTimer = 7;
    }
  }

  block() {
    if (!this.isPunching && this.state == 'idle') {
      this.sprite = this.sprites.block;
      this.isBlocking = true;
    }
  }

  update() {
    if (this.state === 'HIT') {
      this.wait(4);
      this.moveCenter();
  } else {
    if (this.isPunching) {
      this.punchTimer -= deltaTime * 0.1; 
      if (this.punchTimer <= 0) {
          this.moveCenter();
      }
  }
  
  if (this.isBlocking) {
      this.stamina -= deltaTime * 0.05; 
      if (this.stamina <= 0) {
          this.moveCenter();
      }
  }
  
  if (this.state === 'dodging') {
      this.stamina -= deltaTime * 0.05; 
      if (this.stamina <= 0) {
          this.moveCenter();
      }
  }

      if (this.state !== 'dodging'&&!this.isBlocking && this.enemy.isPunching && this.state !== 'HIT') {
          this.got_hit();
      }

      if (this.CPU  && this.state !== 'HIT' && isRunning==true) {
          this.AI();
      }
  }

  if (this.stamina<40) this.stamina += deltaTime * 0.02;
  this.draw();
  }

  addEnemy(enemy) {
    this.enemy = enemy;
  }

  got_hit() {
    this.sprite = this.sprites.left;
    this.offset = 0;
    this.state = "HIT";
    if (this.CPU==true){
      score += 10;
      this.health-=5;
    }
    else{
      this.health-=10;
    }
    if (this.health <= 0 && this.CPU==false) {
      //this.health = 0;
      enemyWins++;
      roundMessage = "Perdiste un round";
      menu = "Round_Result";
      roundLoseMusic();
    }
    else if (this.health <= 0 && this.CPU==true){
      //this.health = 0;
      playerWins++;
      roundMessage = "Ganaste un round";
      menu = "Round_Result";
      roundWinMusic();
    }
    }

  AI(){
    //this.isPunching = false; //Hay un bug de punch infinito xdd
     //hay que optimizar variables xdd
     /*
     do{
      this.block();
     }
    while(this.wait(4))
    darle un tiempo de gracia para bloquear
    */
    if (this.actionCooldown > 0) {
      this.actionCooldown -= deltaTime;
      return; // cooldown
  }
   
    let choice= Math.floor(random(1, 7));
    console.log(choice);
    this.moveCenter();
    switch(choice) { //AI re basico, tal vez darle opciones segun estados del chara
      case 1:
        this.moveRight();
        this.wait2(3);
        
        //this.state='idle';
        //this.punch();
        break;
      case 2:
        this.moveLeft();
        this.wait2(3);
        //this.state='idle';
        //this.punch();
        break;
      case 3:
        this.block();
        break;
      default:
        this.punch();
        break;
      
    } 
    //moveCenter();
    //this.wait(1000);
    this.actionCooldown = 1000; // Puede variar segun dificultad idk
  }

  wait(time) {
    let wtimer;
    time = time * 1000;
    while (wtimer <= time) {
      wtimer += deltaTime;
    }
    return true;
  }
  wait2(time){
    let cd=0;
    if (this.cd > 0) {
      this.cd -= deltaTime;
      return; // cooldown
  }
  cd=time*1000;
}
}

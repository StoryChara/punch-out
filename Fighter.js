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
    this.state = null;
    this.punchTimer = 0; // estos timers toca cambiarlos por corazones
    this.stunTimer = 0;
    this.Timer=2000;
    this.CPU=CPU;
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
    this.state='idle';
    this.isPunching = false;
    this.isBlocking = false;
    this.stunTimer=0;
    if (this.stamina<25){
      this.stamina+=deltaTime*0.1;
    }
    if (this.CPU==true){
      this.AI();
    }
  }

  punch() {
    if (!this.isPunching) {
      this.sprite = this.sprites.punch;
      this.isPunching = true;
      this.punchTimer = 7;
    }
  }
  spunch() {
    if (!this.isPunching) {
      this.sprite = this.sprites.punch;
      this.isPunching = true;
      this.punchTimer = 7;
    }    
  }
  block() {
    if (!this.isPunching) {
      this.sprite = this.sprites.block;
      this.isBlocking = true;
    }
  }  
  update() {
    if(this.state=='HIT'){
      /*this.stunTimer+=deltaTime;
      console.log(this.stunTimer);
      if(this.stunTimer>=this.Timer){
        this.moveCenter();
      } */
     this.wait(4); //revisar esto
     this.moveCenter();
    }
    else{
      if (this.isPunching) {
        this.punchTimer--;
        if (this.punchTimer <= 0) {
          this.moveCenter();
        }
      }
      if (this.isBlocking) { //
        this.stamina--;
        if (this.stamina <= 0) {
          this.moveCenter();
        }
      }
      if(!this.isBlocking && this.enemy.isPunching && this.state!='HIT'){
        this.got_hit();
        
        //
      }
    
      /*
      else if (this.isBlocking){
        this.punchTimer--;
        if (this.punchTimer <= 0) {
          this.isPunching = false;
          this.moveCenter();
        }
      }
        */
    }
    this.draw();
  }
  addEnemy(enemy){
    this.enemy=enemy;
  }
  got_hit(){
      this.sprite = this.sprites.left;
      this.offset = 0;
      this.health--;
      this.state="HIT";
  }
  AI(){
    this.isPunching = false; //Hay un bug de punch infinito xdd
     //hay que optimizar variables xdd
     /*
     do{
      this.block();
     }
    while(this.wait(4))
    darle un tiempo de gracia para bloquear
    */
    let choice= Math.floor(random(1, 7));
    console.log(choice);
    switch(choice) { //AI re basico, tal vez darle opciones segun estados del chara
      case 1:
        //this.moveRight();
        this.punch();
        break;
      case 2:
        //this.moveLeft();
        this.punch();
        break;
      case 3:
        this.punch();
        break;
      default:
        this.block();
        break;
    } 
  }
  wait(time){
    let wtimer;
    time=time*1000;
    while(wtimer<=time){
      wtimer+=deltaTime;
    }
      console.log("RING!!!");
      return true;
  }
}

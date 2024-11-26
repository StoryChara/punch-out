let scenario, audience, logo, deco;
let charaSprites = {}, enemySprites = {};
let pixelFont;
let score;
let menu = "Start_Game";
let angle = 0;
let chara, enemy;
let song, se, referee;
let rounds = [], round = 1;

function preload() {
  scenario = loadImage('sprites/scenario.png'); 
  audience = loadImage('sprites/audience.png');
  logo = loadImage('sprites/logo.png');
  deco = loadImage('sprites/deco-scenario.png');
  
  song = loadSound('resources/soundtrack/1_-_Punch_Out!!_Theme.mp3');
  se = loadSound('resources/soundtrack/28_-_(se)_Punching_Opponent.mp3');
  referee = loadSound('resources/soundtrack/28_-_(se)_Punching_Opponent.mp3');
  
  charaSprites = {
    idle: loadImage('sprites/character-idle.png'),
    right: loadImage('sprites/character-right.png'),
    left: loadImage('sprites/character-left.png'),
    punch: loadImage('sprites/character-punch.png'),
    block: loadImage('sprites/character-block.png'),
    win: loadImage('sprites/character-win.gif'),
    lose: loadImage('sprites/character-lose.gif')
  };
  
  enemySprites = {
    idle: loadImage('sprites/enemy-idle.png'),
    right: loadImage('sprites/enemy-right.png'),
    left: loadImage('sprites/enemy-left.png'),
    punch: loadImage('sprites/enemy-punch.png'),
    block: loadImage('sprites/enemy-block.png'),
    win: loadImage('sprites/enemy-win.gif'),
    lose: loadImage('sprites/enemy-lose.gif')
  };
  
  pixelFont = loadFont('resources/punch-out-nes.ttf');
  
  rounds[1] = loadImage('sprites/round_1.png');
  rounds[2] = loadImage('sprites/round_2.png');
  rounds[3] = loadImage('sprites/round_3.png');
}

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('canvas-container');
  song.setVolume(0.5);
  se.setVolume(0.5);
  enemy = new Fighter("Mike Tyson", 200, 15,25, width/2 - 25, height/2 , enemySprites,true);
  chara = new Fighter("Little Mac", 100, 10,25, width/2 - 25, height/2 + 65,  charaSprites,false);
  enemy.addEnemy(chara);
  chara.addEnemy(enemy);
}

function draw() {
  if (menu === "Start_Game"){
    start_game();
  } else if (menu === "Intro") {
    start_menu();
  } else if (menu === "Fight") {
    fight_menu();
  } else if (menu === "Round"){
    roundAnimation(round);
  }
}

function start_game(){
  background(18,18,18);
  fill(255);
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(255); stroke(0); strokeWeight(0); textSize(10);
  text("CLICK to Start", (width / 2), (height/2));
}

function start_menu() {
  background(18, 18, 18);
  drawGrid();
  animation_img(logo);
  angle = start_text(angle);
}

function fight_menu() {
  background(18, 18, 18);
  image(deco, 0, 0);
  animation_img(audience);
  image(scenario, 0, 0);
  enemy.update();
  chara.update();
  console.log(enemy.state);
  //console.log(enemy.health); console.log(deltaTime); console.log(enemy.stamina); console.log(chara.stamina);
}

function keyPressed() {
  if (keyCode === ENTER && menu === "Intro") {
    menu = "Fight";
    battleMusic();
  } else if (key === 'R' || key === 'r') {
    menu = "Intro";
    introMusic();
  } else if (keyCode === LEFT_ARROW && chara.state=='idle') {
    chara.moveLeft();
    dodgingSE();
  } else if (keyCode === RIGHT_ARROW && chara.state=='idle') {
    chara.moveRight();
    dodgingSE();
  } else if (keyCode === UP_ARROW && chara.state=='idle') {
    chara.punch();
    punchSE();
  } else if (keyCode === DOWN_ARROW && chara.state=='idle') {
    chara.block();
  } else if (key === 'T' || key === 't') {
    menu = "Round";
    roundMusic();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW) {
    chara.moveCenter();
  }
}

function mousePressed() {
  if (menu === "Start_Game") {
    menu = "Intro";
    introMusic();
  }
}

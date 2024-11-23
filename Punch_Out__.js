let scenario, audience, logo, deco;
let charaSprites = {}, enemySprites = {};
let pixelFont;
let score;
let menu = -1, angle = 0;
let chara, enemy;
let song, se;
let round = {};

function preload() {
  scenario = loadImage('sprites/scenario.png'); 
  audience = loadImage('sprites/audience.png');
  logo = loadImage('sprites/logo.png');
  deco = loadImage('sprites/deco-scenario.png');
  
  song = loadSound('resources/soundtrack/1_-_Punch_Out!!_Theme.mp3');
  se = loadSound('resources/soundtrack/28_-_(se)_Punching_Opponent.mp3');
  
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
  
  round = {
    1: loadImage('sprites/round_1.png'),
    2: loadImage('sprites/round_2.png'),
    3: loadImage('sprites/round_3.png')
  };
}

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('canvas-container');
  song.setVolume(0.5);
  se.setVolume(0.5);
  enemy = new Fighter("Mike Tyson", 200, 15, width/2 - 25, height/2 , enemySprites);
  chara = new Fighter("Little Mac", 100, 10, width/2 - 25, height/2 + 65,  charaSprites);
}

function draw() {
  if (menu === -1){
    start_game();
  } else if (menu === 0) {
    start_menu();
  } else if (menu === 1) {
    fight_menu();
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
}

function keyPressed() {
  if (keyCode === ENTER && menu === 0) {
    menu = 1;
    battleMusic();
  } else if (key === 'R' || key === 'r') {
    menu = 0;
    introMusic();
  } else if (keyCode === LEFT_ARROW) {
    dodgingSE();
    chara.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    dodgingSE();
    chara.moveRight();
  } else if (keyCode === UP_ARROW) {
    punchSE();
    chara.punch();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    chara.moveCenter();
  }
}

function mousePressed() {
  if (menu === -1) {
    menu = 0;
    introMusic();
  }
}

let scenario, audience, logo, deco;
let charaSprites = {}, enemySprites = {};
let pixelFont;
let score;
let menu = 0, angle = 0;
let chara, enemy;
let song, se;

function preload() {
  scenario = loadImage('sprites/scenario.png'); 
  audience = loadImage('sprites/audience.png');
  logo = loadImage('sprites/logo.png');
  deco = loadImage('sprites/deco-scenario.png');
  
  song = loadSound('resources/soundtrack/1 - Punch Out!! Theme.mp3');
  se = loadSound('resources/soundtrack/28 - (se) Punching Opponent.mp3');
  
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
}

function setup() {
  createCanvas(500, 500);
  enemy = new Fighter("Mike Tyson", 200, 15, width/2 - 25, height/2 , enemySprites);
  chara = new Fighter("Little Mac", 100, 10, width/2 - 25, height/2 + 65,  charaSprites);
}

function draw() {
  if (menu === 0) {
    start_menu();
  } else if (menu === 1) {
    fight_menu();
  }
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
  if (keyCode === ENTER) {
    menu = 1;
  } else if (key === 'R' || key === 'r') {
    menu = 0;
  } else if (keyCode === LEFT_ARROW) {
    chara.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    chara.moveRight();
  } else if (keyCode === UP_ARROW) {
    chara.punch();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    chara.moveCenter();
  }
}

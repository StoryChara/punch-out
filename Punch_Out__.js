let scenario, audience, logo, deco;
let f_idle, f_right, f_left, f_punch;
let pixelFont;
let score;
let menu;
let angle = 0;
let fighter1;

function preload() {
  logo = loadImage('sprites/logo.png');
  scenario = loadImage('sprites/scenario.png');
  audience = loadImage('sprites/audience.png');
  deco = loadImage('sprites/deco-scenario.png');
  pixelFont = loadFont('resources/punch-out-nes.ttf');
  f_idle = loadImage('sprites/character-idle.png');
  f_right = loadImage('sprites/character-right.png');
  f_left = loadImage('sprites/character-left.png');
  f_punch = loadImage('sprites/character-punch.png');
}

function setup() {
  createCanvas(500, 500);
  menu = 0; 
  fighter1 = new Fighter("Fighter 1", 100, 10, width / 2 - 25, height - 165);
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
  fighter1.update();
}

function keyPressed() {
  if (keyCode === ENTER) {
    menu = 1;
  } else if (key === 'R' || key === 'r') {
    menu = 0;
  } else if (keyCode === LEFT_ARROW) {
    fighter1.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    fighter1.moveRight();
  } else if (keyCode === UP_ARROW) {
    fighter1.punch();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    fighter1.moveCenter();
  }
}

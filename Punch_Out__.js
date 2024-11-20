let scenario, audience;
let pixelFont;
let score;
let menu;
let angle = 0;
let fighter1;

function preload() {
  scenario = loadImage('sprites/scenario.png');
  audience = loadImage('sprites/audience.png');
  pixelFont = loadFont('resources/VT323-Regular.ttf');
}

function setup() {
  createCanvas(500, 500);
  menu = 0; 
  fighter1 = new Fighter("Fighter 1", 100, 10, width / 2 - 25, height - 120);
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
  angle = start_text(angle);
}

function fight_menu() {
  background(18, 18, 18);
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
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    fighter1.moveCenter();  
  }
}

let scenario, audience;
let pixelFont;
let score;
let menu;
let angle = 0;

function preload() {
  scenario = loadImage('sprites/scenario.png');
  audience = loadImage('sprites/audience.png');
  pixelFont = loadFont('resources/VT323-Regular.ttf');
}

function setup() {
  createCanvas(500, 500);
  menu = 0; 
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
}

function keyPressed() {
  if (keyCode === ENTER) {
    menu = 1;
  } else if (key === 'R' || key === 'r') {
    menu = 0;
  }
}

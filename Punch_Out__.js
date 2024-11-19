let backgroundImg;
let pixelFont;
let score, life_pj, life_enemy;
let menu;
let angle = 0;

function preload() {
  backgroundImg = loadImage('sprites/scenario.png');
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
  let yOffset = sin(angle) * 10;
  angle += 0.05;
  textFont(pixelFont);
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER); 
  text("Punch-Out!!!", width / 2, height / 4 + yOffset);
  textSize(16);
  text("Press ENTER to Start", width / 2, height / 2); 
}

function fight_menu() {
  image(backgroundImg, 0, 0);
}

function keyPressed() {
  if (keyCode === ENTER) {
    menu = 1;
  } else if (key === 'R' || key === 'r') {
    menu = 0;
  }
}

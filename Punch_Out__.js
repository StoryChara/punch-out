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
  drawGrid();
  let yOffset = sin(angle) * 10;
  angle += 0.05;
  textFont(pixelFont);
  fill(235, 154, 2); stroke(235,154, 2); strokeWeight(2); textSize(64);
  textAlign(CENTER, CENTER); 
  text("Punch-Out!!!", width / 2, height / 4 + yOffset);
  fill(255); stroke(0); strokeWeight(0); textSize(16);
  text("Press ENTER to Start", width / 2, height / 2); 
}

function drawGrid() {
  let gridYStart = height / 4 - 50;
  let gridYEnd = height / 4 + 50; 

  stroke(0, 0, 255);
  strokeWeight(1);
  
  for (let x = 0; x < width; x += 10) {
    line(x, gridYStart, x, gridYEnd);
  }
  
  for (let y = gridYStart; y <= gridYEnd; y += 10) {
    line(0, y, width, y);
  }
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

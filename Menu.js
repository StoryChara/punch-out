let referee_count = 0;
let referee_time = 20;
let isRunning = false;

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

function battle_menu(){
  roundAnimation(round);
}

function interlude_menu(){
  image(interlude, 0, 0);
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(255, 153, 12); stroke(0); strokeWeight(0); textSize(10);
  song.onended(function() {
    menu = "Enter";
    enter_menu();
  });
}

function enter_menu(){
  image(interlude, 0, 0);
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(255, 153, 12); stroke(0); strokeWeight(0); textSize(10);
  text("Press ENTER", (width / 2), ((3*height)/4));
  text("to continue", (width / 2), ((3*height)/4)+15);
}
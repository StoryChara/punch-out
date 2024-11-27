let referee_count = 0;
let referee_time = 20;

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


function fight_menu() {
  background(18, 18, 18);
  image(deco, 0, 0);
  animation_img(audience);
  image(scenario, 0, 0);
  image(refereeSprites.talk2, 0,0);
  if (referee_count>=0) {
    //num = Math.floor(referee_count/referee_time);
    numAnimation(Math.floor(referee_count/referee_time));
    referee_count--;
  }
  enemy.update();
  chara.update();
  // console.log(enemy.state); console.log(enemy.health); console.log(deltaTime); console.log(enemy.stamina); console.log(chara.stamina);
}

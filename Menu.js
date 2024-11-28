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
  num = Math.floor(referee_count/referee_time);
  if (num%2 === 1 && num>=0) {
    image(refereeSprites.talk2, 0,0);
  } else if (num>=0) {
    image(refereeSprites.talk1, 0,0);
  } else {
    image(refereeSprites.talk2, 0,0);
  }
  
  if (num>=0) {
    
    if ( num === 0 ){
      numAnimation("YA");
    } else {
      numAnimation(num);
    }
    
    if (num === referee_count/referee_time){
      speakReferee();
    }
    referee_count--;
  }
  enemy.update();
  chara.update();
  // console.log(enemy.state); console.log(enemy.health); console.log(deltaTime); console.log(enemy.stamina); console.log(chara.stamina);
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

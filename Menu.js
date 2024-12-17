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
  if (num >= 0) {
    if (isRunning) {
      pauseTimer(); // Pausa si el referee está contando
    }
  } else if (!isRunning) {
    startTimer(); // Reanuda si el referee no está contando
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
  //playerHealthBar.update(playerHealth);
  //enemyHealthBar.update(enemyHealth);
  
  //displayRoundWins();
  timer();
  health_Bar();
}

function next_round_menu() {
  background(0); // Mostrar la pantalla del siguiente round
  if (currentRound <= maxRounds) {
    image(rounds[currentRound], width/2 - rounds[currentRound].width/2, height/2 - rounds[currentRound].height/2);
  }
  // Esperar 3 segundos antes de continuar al siguiente round
  if (millis() - roundTimer > 3000) {
    startNextRound(); 
  }
}

function round_result_menu() {
  background(0);
  fill(255);
  textSize(16); 
  textAlign(CENTER, CENTER); 

  // Mostrar sprite de victoria o derrota
  if (roundMessage.includes("Ganaste")) {
    enemy.sprite = enemy.sprites.lose;
    chara.sprite = chara.sprites.win;
  } else if (roundMessage.includes("Perdiste")) {
    chara.sprite = chara.sprites.lose;
    enemy.sprite = enemy.sprites.win;
  }

  enemy.draw(); // Dibujar primero el sprite del enemigo
  chara.draw(); // Dibujar después el sprite del jugador

  // Esperar 4 segundos antes de mostrar el mensaje
  if (millis() - roundTimer > 4000) {
    fill(0);
    rect(0, 0, width, 100); 
    fill(255);
    text(roundMessage, width / 2, 50); 
    textSize(12);
    text("Presiona 'C' para continuar", width / 2, 80);
  }
}

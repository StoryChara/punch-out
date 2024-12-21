let time = { minutes: 0, seconds: 0 };

function start_text(angle) {
  let yOffset = sin(angle) * 10;
  angle += 0.05;
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(255); stroke(0); strokeWeight(0); textSize(10);
  text("Press ENTER to Start", (width / 2), ((3*height) / 4)-50); 
  return angle;
}

function animation_img(img) {
  angle += 0.1; 
  let yOffset = floor(sin(angle) * 5); 
  image(img, 0, yOffset);
}


function drawGrid() {
  let gridYStart = height / 4 - 25;
  let gridYEnd = height / 4 + 125;

  stroke(0, 0, 255);
  strokeWeight(1);

  for (let x = 0; x < width; x += 10) {
    line(x, gridYStart, x, gridYEnd);
  }

  for (let y = gridYStart; y <= gridYEnd; y += 10) {
    line(0, y, width, y);
  }
}

function roundAnimation(){
  //image(rounds[i], 0, 0);
  angle += 0.1; 
  let yOffset = floor(sin(angle) * 5); 
  image(rounds[currentRound], 0, yOffset);
  song.onended(function() {
    menu = "Fight";
    referee_count = 4 * referee_time;
    battleMusic(); startNextRound()
  });
}

function numAnimation(i){
  image(refereeSprites.talk, 0, 0);
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(0);
  stroke(0); strokeWeight(0); textSize(10);
  text(i, ((3*width) / 4)-47, ((3*height) / 4)-25); 
}

function timer(){
  fill(0, 112, 236); stroke(0); strokeWeight(1);
  rect(375, 30, 95, 52, 5);
  textFont(pixelFont); textAlign(CENTER, CENTER);
  fill(255); stroke(0); strokeWeight(0); textSize(20);
  formattedTime = `${String(time.minutes).padStart(1, '0')}:${String(time.seconds).padStart(2, '0')}`;
  text(formattedTime, 425, 45);
  textSize(11);
  text(`Round ${currentRound}`, 425, 70);
  
  if (isRunning && millis() - lastUpdate >= 1000) {
    lastUpdate = millis();
    time.seconds++;

    if (time.seconds >= 60) {
      time.seconds = 0;
      time.minutes++;
    }
  }
}

function statsBar(){
  // EXTRAS
  push();
  translate(0, 10);
  fill(0); stroke(0, 112, 236); strokeWeight(1);
  rect(30, 30, 55, 35, 5); rect(90, 30, 90, 35, 5);
  image(extraSprites.star, 35, 35); image(extraSprites.heart, 95, 35);
  textFont(pixelFont); textAlign(LEFT, TOP);
  fill(255); stroke(0); strokeWeight(0); textSize(20);
  text(playerWins, 65, 40); text(playerHealth, 120, 40);
  pop();
  
  // VIDA
  push();
  fill(0); stroke(0); strokeWeight(2);
  rectMode(CORNER);
  health_lenght = 70;
  rect(198, 30, health_lenght, 30, 5); rect(283, 30, health_lenght, 30, 5);
  fill(255); rectMode(CORNERS);
  rect(268-map(playerHealth, 0, 100, 0, health_lenght), 30, 268, 60, 5); rect(283, 30, 283+map(enemyHealth, 0, 100, 0, health_lenght), 60, 5);
  pop();
  
  
  // PUNTOS
  push();
  fill(0, 112, 236); stroke(0); strokeWeight(1);
  rect(188, 56, 175, 26, 5);
  textFont(pixelFont); textAlign(CENTER, CENTER);
  fill(255); stroke(0); strokeWeight(0); textSize(11);
  formattedPoints = `Points: ${score}`;
  text(formattedPoints, 275, 70);
  pop();
  
}

function startTimer() {
  isRunning = true;
  lastUpdate = millis(); // Resetea el punto de referencia para evitar saltos
}

function pauseTimer() {
  isRunning = false;
}

function resetTimer() {
  time.minutes = 0;
  time.seconds = 0;
  isRunning = false;
}

function nextRound() {
  currentRound++;
  if (playerWins >= 2 || enemyWins >= 2) {
    menu = "End";
    if (playerWins >= 2){
      winMusic();
    } else {
      loseMusic();
    }
  } else if (currentRound > maxRounds) {
    menu = "End";
  } else {
    menu = "Interlude";
    song.stop();
    interludeMusic();
  }
}

function startNextRound() {
  menu = "Fight";
  playerHealth = 100;
  enemyHealth = 100;
  chara.health=100;
  enemy.health=100; //reset hp per round
  chara.moveCenter();
  enemy.moveCenter();
  resetTimer();
}

function end_game() {
  background(0);
  if (playerWins >= 2) {
    image(battle_win, 0, 0);
  } else if (currentRound > maxRounds) {
    image(battle_lose, 0, 0);
  } else if(enemyWins >= 2){
    image(battle_lose, 0, 0);
  }
}

function resetGame() {
  menu = "Start_Game";
  song.stop(); battle.stop();
  playerWins = 0;
  enemyWins = 0;
  currentRound = 1;
  roundMessage = "";
  chara.moveCenter();
  enemy.moveCenter();
  referee_count = -1;
  isRunning = false; 
  chara.health = 100; 
  enemy.health = 100; 
  chara.state = 'idle'; 
  enemy.state = 'idle'; 
  chara.isPunching = false; 
  enemy.isPunching = false; 
  chara.isBlocking = false; 
  enemy.isBlocking = false; 
}

function round_battles() {
}

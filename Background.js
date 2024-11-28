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

function roundAnimation(i){
  //image(rounds[i], 0, 0);
  angle += 0.1; 
  let yOffset = floor(sin(angle) * 5); 
  image(rounds[i], 0, yOffset);
  song.onended(function() {
    menu = "Fight";
    referee_count = 4 * referee_time;
    battleMusic(); updateBattle();
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
  fill(0); stroke(255); strokeWeight(2);
  rect(300, 50, 120, 30);
  textFont(pixelFont); textAlign(CENTER, CENTER);
  fill(255); stroke(0); strokeWeight(0); textSize(20);
  formattedTime = `${String(time.minutes).padStart(1, '0')}:${String(time.seconds).padStart(2, '0')}`;
  text(formattedTime, 360, 65);
  
  if (isRunning && millis() - lastUpdate >= 1000) {
    lastUpdate = millis();
    time.seconds++;

    if (time.seconds >= 60) {
      time.seconds = 0;
      time.minutes++;
    }
  }
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
  lastUpdate = millis();
}

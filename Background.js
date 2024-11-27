let refereeCount = 1; // Número actual que el referee está contando
let counting = false; // Indica si la animación está activa
let refereeMaxCount = 10; // Número máximo a contar
let lastUpdateTime = 0; // Último momento en que se actualizó el conteo
let interval = 1000; // Intervalo en milisegundos (1 segundo)
let spriteToggle = true; // Alternar entre los sprites

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
  image(rounds[i], 0, 0);
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

function start_text(angle) {
  let yOffset = sin(angle) * 10;
  angle += 0.05;
  textFont(pixelFont);
  fill(235, 154, 2); stroke(235, 154, 2); strokeWeight(2); textSize(64);
  textAlign(CENTER, CENTER);
  text("Punch-Out!!!", width / 2, height / 4 + yOffset);
  fill(255); stroke(0); strokeWeight(0); textSize(16);
  text("Press ENTER to Start", width / 2, height / 2); 
  return angle;
}

function animation_img(img) {
  let yOffset = floor(sin(angle) * 5);
  angle += 0.05;
  image(img, 0, yOffset)
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

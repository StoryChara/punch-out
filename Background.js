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

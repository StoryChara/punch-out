let scenario, audience, logo, deco;
let charaSprites = {}, enemySprites = {}, refereeSprites = {};
let pixelFont;
let score;
let menu = "Start_Game";
let angle = 0;
let chara, enemy;
let song, se, referee;
let rounds = [], round = 1;
let playerHealthBar, enemyHealthBar;
let playerHealth = 100, enemyHealth = 100;
let maxRounds = 3, currentRound = 1;
let playerWins = 0, enemyWins = 0;
let roundTimer = 0;
let roundMessage = "";

function preload() {
  scenario = loadImage('sprites/scenario.png');
  audience = loadImage('sprites/audience.png');
  logo = loadImage('sprites/logo.png');
  deco = loadImage('sprites/deco-scenario.png');
  interlude = loadImage('sprites/interlude.png');
  song = loadSound('resources/soundtrack/1_-_Punch_Out!!_Theme.mp3');
  se = loadSound('resources/soundtrack/28_-_(se)_Punching_Opponent.mp3');
  referee = loadSound('resources/soundtrack/28_-_(se)_Punching_Opponent.mp3');
  charaSprites = {
    idle: loadImage('sprites/character-idle.png'),
    right: loadImage('sprites/character-right.png'),
    left: loadImage('sprites/character-left.png'),
    punch: loadImage('sprites/character-punch.png'),
    block: loadImage('sprites/character-block.png'),
    win: loadImage('sprites/character-win.gif'),
    lose: loadImage('sprites/character-lose.gif')
  };
  enemySprites = {
    idle: loadImage('sprites/enemy-idle.png'),
    right: loadImage('sprites/enemy-right.png'),
    left: loadImage('sprites/enemy-left.png'),
    punch: loadImage('sprites/enemy-punch.png'),
    block: loadImage('sprites/enemy-block.png'),
    win: loadImage('sprites/enemy-win.gif'),
    lose: loadImage('sprites/enemy-lose.gif')
  };
  refereeSprites = {
    talk1: loadImage('sprites/referee-1.png'),
    talk2: loadImage('sprites/referee-2.png'),
    talk: loadImage('sprites/referee-dialogue.png'),
  }
  pixelFont = loadFont('resources/punch-out-nes.ttf');
  rounds[1] = loadImage('sprites/round_1.png');
  rounds[2] = loadImage('sprites/round_2.png');
  rounds[3] = loadImage('sprites/round_3.png');
}

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('canvas-container');
  song.setVolume(0.5);
  se.setVolume(0.5);
  enemy = new Fighter("Mike Tyson", 100, 15, 25, width/2 - 25, height/2 , enemySprites, true);
  chara = new Fighter("Little Mac", 100, 10, 25, width/2 - 25, height/2 + 65, charaSprites, false);
  enemy.addEnemy(chara);
  chara.addEnemy(enemy);
  //playerHealthBar = new HealthBar(20, 20, 100, 10, color(0, 255, 0));
  //enemyHealthBar = new HealthBar(width - 120, 20, 100, 10, color(255, 0, 0));
}

function draw() {
  if (menu === "Start_Game"){
    start_game();
  } else if (menu === "Intro") {
    start_menu();
  } else if (menu === "Fight") {
    fight_menu();
  } else if (menu === "Round"){
    battle_menu();
  } else if (menu === "Interlude"){
    interlude_menu();
  } else if (menu === "Enter"){
    enter_menu();
  } else if (menu === "Next_Round") {
    next_round_menu();
  } else if (menu === "Round_Result") {
    round_result_menu();
  } else if (menu === "End") {
    end_game();
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    resetGame();
  } else if (menu === "Intro"){
    if (keyCode === ENTER){
      menu = "Interlude";
      song.stop();
      interludeMusic();
    }
  } else if (menu === 'Enter') {
    if (keyCode === ENTER){
      menu = "Round";
      song.stop();
      roundMusic();
    }
  } else if (menu === 'Fight' && referee_count < 0 ){
    if (keyCode === LEFT_ARROW && chara.state == 'idle') {
      chara.moveLeft();
      dodgingSE();
    } else if (keyCode === RIGHT_ARROW && chara.state == 'idle') {
      chara.moveRight();
      dodgingSE();
    } else if (keyCode === UP_ARROW && chara.state == 'idle') {
      chara.punch();
      punchSE();
      enemyHealth -= chara.attack;
      if (enemyHealth <= 0) {
        enemyHealth = 0;
        playerWins++;
        roundMessage = "Ganaste un round";
        menu = "Round_Result";
      }
    } else if (keyCode === DOWN_ARROW && chara.state == 'idle') {
      chara.block();
      blockingSE();
    }
  } else if (menu === 'Round_Result' && (key === 'C' || key === 'c')) {
    nextRound(); // Cambiar a la siguiente ronda
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW) {
    chara.moveCenter();
  }
}

function mousePressed() {
  if (menu === "Start_Game") {
    menu = "Intro";
    introMusic();
  }
}

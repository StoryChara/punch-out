function playSound(){
  song.play();
}

function playSE(){
  se.play();
}

// ---------------------------------------------------------------------- //

function battleMusic(){
  song.stop();
  song.setPath("resources/soundtrack/10_-_Match_BGM.mp3", playSound);
}

function introMusic(){
  song.stop();
  song.setPath("resources/soundtrack/1_-_Punch_Out!!_Theme.mp3", playSound);
  song.loop(False);
}

function fightMusic(){
  song.stop();
  song.setPath("resources/soundtrack/9_-_Round_1_Begins....mp3", playSound);
  song.loop(True);
}

function roundMusic(){
  song.stop();
  song.setPath("resources/soundtrack/1_-_Punch_Out!!_Theme.mp3", playSound);
  song.loop(False);
}

// ---------------------------------------------------------------------- //

function punchSE(){
  se.stop();
  se.setPath("resources/soundtrack/28_-_(se)_Punching_Opponent.mp3", playSE);  
}

function dodgingSE(){
  se.stop();
  se.setPath("resources/soundtrack/37_-_(se)_Dodging.mp3", playSE);
}

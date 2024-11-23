function playSound(){
  song.play();
}

function playSE(){
  se.play();
}

function playReferee(){
  referee.play();
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

function roundWinMusic(){
  song.stop();
  song.setPath("resources/soundtrack/14_-_Bout_Winner.mp3", playSound);
  song.loop(False);
}

function roundLoseMusic(){
  song.stop();
  song.setPath("resources/soundtrack/12_-_You_Lose.mp3", playSound);
  song.loop(False);
}

function loseMusic(){
  song.stop();
  song.setPath("resources/soundtrack/20_-_Game_Over.mp3", playSound);
  song.loop(False);
}

function winMusic(){
  song.stop();
  song.setPath("resources/soundtrack/19_-_You've_Won_the_Championship_Ranking!!.mp3", playSound);
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

function blockingSE(){
  se.stop();
  se.setPath("resources/soundtrack/24_-_(se)_Blocking.mp3", playSE);
}

function knockoutSE(){
  se.stop();
  se.setPath("resources/soundtrack/46_-_(se)_Opponent_Knocked_Out_2.mp3", playSE);
}

function uppercutSE(){
  se.stop();
  se.setPath("resources/soundtrack/25_-_(se)_Opponent_throwing_an_Uppercut.mp3", playSE);
}

function missSE(){
  se.stop();
  se.setPath("resources/soundtrack/26_-_(se)_Punch_Missed.mp3", playSE);
}

// ---------------------------------------------------------------------- //

function bellReferee(){
  referee.stop();
  referee.setPath("resources/soundtrack/41_-_(se)_Bell_ringing.mp3", playSE);
}

function speakReferee(){
  referee.stop();
  referee.setPath("resources/soundtrack/36_-_(se)_Referee_Announcing_Winner.mp3", playSE);
}

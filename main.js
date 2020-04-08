var clockCount = 0;
var pod = {};
var map = {};
var level = 0;
var score;
var lives;

function startGame(){
	restartGame();
	inputEngine.registerEvents();
}

function restartGame() {
	score = 0;
	lives = 2;
	level = 0;
	resetLvl();
	map.draw();
	pod.draw();
}

function resetLvl(){
	map = {};
	map = new Map(PATTERN[level]);
	pod = new Pod();
}

function action(scoreIncrease){
	map.draw();
	pod.draw();

	if(pod.isDead()){
		if (lives == 0) {
			restartGame();
			map.drawTextScreen("You dead! Score: " + score);
		} else {
			lives--;
			resetLvl();
			map.drawTextScreen("You fell off! Lives left: " + lives);
		}
	}
		
	if(map.hasWon()){
		level++;
		if (level == PATTERN.length) {
			map.drawWinScreen();
		} else {
			resetLvl();
			map.drawTextScreen("Level Complete! Score: " + score);
		}
		return;
	}

	if (scoreIncrease) {
		score++;
	}
}

$(function() {
	startGame();
});

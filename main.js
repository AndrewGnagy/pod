var clockCount = 0;
var pod = {};
var map = {};
var level = 0;
var score;
var lives;

function startGame(){
	resetLvl();
	map.draw();
	pod.draw();
	score = 0;
	lives = 2;
	inputEngine.registerEvents();
}

function resetLvl(){
	map = {};
	map = new Map(PATTERN[level]);
	pod = new Pod();
}

function action(){
	map.draw();
	pod.draw();

	if(pod.isDead()){
		resetLvl();
		map.drawTextScreen("You dead! Score: " + score);
		return;
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
	score++;
}

$(function() {
	startGame();
});

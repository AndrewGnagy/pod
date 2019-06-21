var clockCount = 0;
var pod = {};
var map = {};
var level = 0;
var score;
var lives;

function startGame(){
	resetLvl();
	score = 0;
	lives = 2;
	inputEngine.registerEvents();
}

function resetLvl(){
	map = {};
	map = new Map(PATTERN[level]);
	pod = new Pod();
	map.draw();
	pod.draw();
}

function action(){
	map.draw();
	pod.draw();

	if(pod.isDead()){
		alert("You dead! Score: " + score);
		resetLvl();
		return;
	}
		
	if(map.hasWon()){
		alert("Level complete!");
		level++;
		if (level == PATTERN.length) {
			map.drawWinScreen();
		} else {
			resetLvl();
		}
		return;
	}
	score++;
}

$(function() {
	startGame();
});

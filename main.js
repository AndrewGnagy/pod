var clockCount = 0;
var pod = {};
var map = {};
//            c.drawImage(IMAGES[self.currMap.name], img_x, img_y, SIZE, SIZE,
//                            s_x, s_y, SIZE, SIZE);


function startGame(){
	map = new Map(pattern3);
	pod = new Pod();

	map.draw();
	pod.draw();

	inputEngine.registerEvents();
}

function resetGame(){
	map = {};
	map = new Map(pattern2);
	pod = new Pod();
	map.draw();
	pod.draw();
}

function action(){
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,500,300);
	map.draw();
	pod.draw();

	if(pod.isDead()){
		alert("You dead!");
		resetGame();
		return;
	}
		
	if(map.hasWon()){
		alert("You won!");
		resetGame();
		return;
	}
}

$(function() {
startGame();

});
function Map(pattern){
	this.name = "Map";
	this.pattern = [];
	for(var x = 0; x<pattern.length; x++){ //Need to copy by value not reference
		this.pattern.push(pattern[x].slice(0));
	}
}
Map.prototype.draw = function () {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	clearMap(ctx);
	drawScore(ctx); 

	for(var y = 0; y < 10; y++){
		for(var x = 0; x < 10; x++){
			//0: Black
			if(!this.pattern[y][x]) {
				continue;
			}
			//1: Red
			if(this.pattern[y][x] == 1)
				ctx.fillStyle="#FF0000";
			//2: Green
			if(this.pattern[y][x] == 2)
				ctx.fillStyle="#00FF00";
			//3: Blue
			if(this.pattern[y][x] == 3)
				ctx.fillStyle="#0000FF";
			//4: Purple
			if(this.pattern[y][x] == 4)
				ctx.fillStyle="#FF00FF";
			//Gem shape
			ctx.fillRect(x*50 + 8, y*30 + 8, 34, 14);
			ctx.fillRect(x*50 + 3, y*30 + 8, 3, 14);
			ctx.fillRect(x*50 + 8, y*30 + 3, 34, 3);
			ctx.fillRect(x*50 + 44, y*30 + 8, 3, 14);
			ctx.fillRect(x*50 + 8, y*30 + 24, 34, 3);
			//Full rect
			//ctx.fillRect(x*50,y*30,50,30);
		}
	}
}

Map.prototype.drawWinScreen = function () {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	clearMap(ctx);
	drawScore(ctx);
	ctx.fillStyle="#FFFFFF";
	ctx.font = "80px Arial";
	ctx.strokeText("COMPLETE", 20, 300); 
}

Map.prototype.hasWon = function () { //Sum array elems and return true if equal to 1
	return map.pattern.reduce(function(x,y){return x + y.reduce(function(i,j){return i+j},0)},0) == 1;
}

function clearMap(ctx) {
	//Clear and fill with black
	ctx.clearRect(0,0,500,350);
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,500,350);
}

function drawScore(ctx) {
	ctx.fillStyle="#FFFFFF";
	ctx.font = "30px Arial";
	ctx.strokeText("Score: " + score, 10, 340);
}

var PATTERN = [
	   [[1,1,1,0,0,0,0,0,0,0],
		[0,0,2,0,0,0,0,0,0,0],
		[0,0,2,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]],
	   [[1,2,2,0,0,0,0,0,0,0],
		[0,1,2,0,0,0,0,0,0,0],
		[0,0,1,0,0,1,0,0,0,0],
		[0,0,2,1,0,1,0,0,0,0],
		[0,0,2,2,1,2,1,0,0,0],
		[0,0,0,0,0,1,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]],
	   [[1,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0],
		[1,0,0,1,2,2,1,0,0,0],
		[1,1,1,2,3,2,1,0,0,0],
		[0,0,0,1,2,2,2,1,1,1],
		[0,0,0,1,2,2,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]]
];

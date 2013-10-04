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

	for(var y = 0; y < 10; y++){
		for(var x = 0; x < 10; x++){
			ctx.fillStyle="#000000";
			if(this.pattern[y][x] == 1)
				ctx.fillStyle="#FF0000";
			if(this.pattern[y][x] == 2)
				ctx.fillStyle="#00FF00";
			if(this.pattern[y][x] == 3)
				ctx.fillStyle="#0000FF";
			ctx.fillRect(x*50,y*30,50,30);
		}
	}
}

Map.prototype.hasWon = function () { //Sum array elems and return true if equal to 1
	return map.pattern.reduce(function(x,y){return x + y.reduce(function(i,j){return i+j},0)},0) == 1;
}

var pattern1 = [[1,1,1,0,0,0,0,0,0,0],
				[0,0,2,0,0,0,0,0,0,0],
				[0,0,2,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]];

var pattern2 = [[1,2,2,0,0,0,0,0,0,0],
				[0,1,2,0,0,0,0,0,0,0],
				[0,0,1,0,0,1,0,0,0,0],
				[0,0,2,1,0,1,0,0,0,0],
				[0,0,2,2,1,2,1,0,0,0],
				[0,0,0,0,0,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]];

var pattern3 = [[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,2,2,1,0,0,0],
				[1,1,1,2,3,2,1,0,0,0],
				[0,0,0,1,2,2,2,1,1,1],
				[0,0,0,1,2,2,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]];
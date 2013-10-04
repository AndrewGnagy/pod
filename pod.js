function Pod(){
    this.coord = {x:0, y:0};
}
Pod.prototype.draw = function (event) {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");

	//Draws a circle
	ctx.strokeStyle = "#333333";
	ctx.beginPath();
	ctx.arc((this.coord.x*50+25),(this.coord.y*30+15),10,0,2*Math.PI);
	ctx.stroke();
}
Pod.prototype.move = function (x,y) {
	map.pattern[this.coord.y][this.coord.x]--; //Decrement space
	this.coord.x += x;
	this.coord.y += y;
	if(this.coord.x > 9)
		this.coord.x = 9;
	if(this.coord.x < 0)
		this.coord.x = 0;
	if(this.coord.y > 9)
		this.coord.y = 9;
	if(this.coord.y < 0)
		this.coord.y = 0;
}
Pod.prototype.isDead = function (x,y) {
	return !(map.pattern[this.coord.y][this.coord.x])
	
}
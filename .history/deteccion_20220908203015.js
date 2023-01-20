let canvas = document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	heigh = (canvas.heigh = width.heigh);

function numandom(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}

function Ball(x, y, vely, velx, color, size) {
	this.x = x;
	this.y = y;
	this.vely = vely;
	this.velx = velx;
	this.color = color;
	this.size = size;
}

Ball.prototype.draw = function () {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
};

var testBall = new Ball(50, 100, 4, 4, 'blue', 10);

testBall.draw();

Ball.prototype.update = function () {
	if (this.x + this.size >= width) this.velx = -this.velx;
	if (this.x - this.size <= 0) this.velx = -this.velx;
	if (this.y + this.size >= heigh) this.vely = -this.vely;
	if (this.y + this.size <= heigh) this.vely = -this.vely;

	this.x += this.velx;
	this.y += this.vely;
};

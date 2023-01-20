let canvas = document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	height = (canvas.heigh = width.heigh);

function random(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}

function randomRGB() {
	return `rbg(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
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

Ball.prototype.update = function () {
	if (this.x + this.size >= width) this.velx = -this.velx;
	if (this.x - this.size <= 0) this.velx = -this.velx;
	if (this.y + this.size >= heigh) this.vely = -this.vely;
	if (this.y + this.size <= 0) this.vely = -this.vely;

	this.x += this.velx;
	this.y += this.vely;
};

var testBall = new Ball(50, 100, 4, 4, 'blue', 10);

testBall.draw();

var balls = [];

function loop() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
	ctx.fillRect(0, 0, width, height);

	while (balls.length < 25) {}
}

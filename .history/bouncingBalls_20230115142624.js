let canvas = document.querySelector('.canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	height = (canvas.height = window.innerHeight);

function random(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}

function randomRGB() {
	return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// function Ball(x, y, vely, velx, color, size) {
// 	this.x = x;
// 	this.y = y;
// 	this.vely = vely;
// 	this.velx = velx;
// 	this.color = color;
// 	this.size = size;
// }

// Cuales don las diferencias entre una funcion constructora y un clase
// La funcion anterior es siquiera una funcion constuctora?

class Ball {
	constructor(x, y, vely, velx, color, size) {
		this.x = x;
		this.y = y;
		this.vely = vely;
		this.velx = velx;
		this.color = color;
		this.size = size;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}
	update() {
		if (this.x + this.size >= width) this.velx = -this.velx;
		if (this.x - this.size <= 0) this.velx = -this.velx;
		if (this.y + this.size >= height) this.vely = -this.vely;
		if (this.y + this.size <= 0) this.vely = -this.vely;

		this.x += this.velx;
		this.y += this.vely;
	}
}

var balls = [];

while (balls.length < 25) {
	const size = random(10, 20);
	const ball = new Ball(
		random(0 + size, width - size),
		random(0 + size, height - size),
		random(-7, 7),
		random(-7, 7),
		randomRGB(),
		size
	);

	balls.push(ball);
}

function loop() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
	ctx.fillRect(0, 0, width, height);

	for (const ball of balls) {
		ball.draw();
		ball.update();
	}

	requestAnimationFrame(loop);
}

loop();

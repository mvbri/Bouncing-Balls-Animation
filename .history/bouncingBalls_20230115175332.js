const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
	getDisign();
});
window.addEventListener('DOMContentLoaded', () => {
	getDisign();
});

const random = (min, max) => {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
};

const randomRGB = () => {
	return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
};

const getDisign = () => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	loop(width, height);

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
			if (this.x + this.size >= window.innerWidth) this.velx = -this.velx;
			if (this.x - this.size <= 0) this.velx = -this.velx;
			if (this.y + this.size >= window.innerHeight) this.vely = -this.vely;
			if (this.y - this.size <= 0) this.vely = -this.vely;

			this.x += this.velx;
			this.y += this.vely;
		}
	}

	const drawBalls = (amount) => {
		let balls = [];
		while (balls.length < amount) {
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
		return balls;
	};
};

// function Ball(x, y, vely, velx, color, size) {
// 	this.x = x;
// 	this.y = y;
// 	this.vely = vely;
// 	this.velx = velx;
// 	this.color = color;
// 	this.size = size;
// }

// Cuales son las diferencias entre una funcion constructora y un clase
// La funcion anterior es siquiera una funcion constuctora?

const loop = (width, height) => {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
	ctx.fillRect(0, 0, width, height);

	let balls = drawBalls(25);

	for (const ball of balls) {
		ball.draw();
		ball.update();
	}

	requestAnimationFrame(loop);
};

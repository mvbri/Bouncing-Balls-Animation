const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let myReq;

window.addEventListener('resize', () => {
	getDisign(true);
});
window.addEventListener('DOMContentLoaded', () => {
	getDisign(false);
});

const getDisign = (resizeD) => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	let resize = resizeD;

	const random = (min, max) => {
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	};

	const randomRGB = () => {
		return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
	};

	class Ball {
		constructor(x, y, vely, velx, color, radio) {
			this.x = x;
			this.y = y;
			this.vely = vely;
			this.velx = velx;
			this.color = color;
			this.radio = radio;
		}

		draw() {
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
			ctx.fill();
		}
		update() {
			if (this.x + this.radio >= width) this.velx = -this.velx;
			if (this.x - this.radio <= 0) this.velx = -this.velx;
			if (this.y + this.radio >= height) this.vely = -this.vely;
			if (this.y - this.radio <= 0) this.vely = -this.vely;

			this.x += this.velx;
			this.y += this.vely;
		}
	}

	let balls = [];
	while (balls.length < 5) {
		const radio = random(10, 20);
		const ball = new Ball(
			random(0 + radio, width - radio),
			random(0 + radio, height - radio),
			random(-7, 7),
			random(-7, 7),
			randomRGB(),
			radio
		);

		balls.push(ball);
	}

	if (resize) cancelAnimationFrame(myReq);

	const loop = () => {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
		ctx.fillRect(0, 0, width, height);

		for (const ball of balls) {
			ball.draw();
			ball.update();
		}

		myReq = requestAnimationFrame(loop);
	};
	loop();
};

// function Ball(x, y, vely, velx, color, radio) {
// 	this.x = x;
// 	this.y = y;
// 	this.vely = vely;
// 	this.velx = velx;
// 	this.color = color;
// 	this.radio = radio;
// }

// Cuales son las diferencias entre una funcion constructora y un clase
// La funcion anterior es siquiera una funcion constuctora?

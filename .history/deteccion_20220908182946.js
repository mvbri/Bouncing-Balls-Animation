let canvas = document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	heigh = (canvas.heigh = width.heigh);

const numRandom = (min, max) => {
	let num = Math.floor(Math.random() * (min - max + 1));
	document.write(num + '<br>');
	num = num + min;
	document.write(num + '<br>');
};

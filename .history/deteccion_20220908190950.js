let canvas = document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	heigh = (canvas.heigh = width.heigh);

function numandom(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;

	document.write(num + '<br>');
	return num;
}

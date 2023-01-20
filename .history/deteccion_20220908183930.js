let canvas = document.querySelector('canvas'),
	ctx = canvas.getContext('2d'),
	width = (canvas.width = window.innerWidth),
	heigh = (canvas.heigh = width.heigh);

// function numRandom(min, max) {
// 	var num = Math.floor(Math.random() * (max - min + 1)) + min;

// 	document.write(num + '<br>');
// 	return num;
// }

console.log(Math.floor(Math.random() * 6 - 8));

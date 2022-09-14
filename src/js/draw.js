// drawing
		
var canvas, context, canvasImage;
		
var cursorPosition = {
  x: undefined,
  y: undefined,
};
var color = '#e5e5e5';
var size = 10;

function randomColor() {
  var colors = [
    '#fcd1c4',
    '#abfcec',
    '#a3d9e1',
    '#fbbfff',
    '#a9ef8f',
    '#fff0b2',
    '#fff0b2',
  ];
  color = colors[Math.floor(Math.random() * colors.length)];
}

function throttle(ms, fn) {
  var lastCallTime;
  return function () {
    var now = Date.now();
    if (!lastCallTime || now - lastCallTime > ms) {
      lastCallTime = now;
      fn.apply(this, arguments);
    }
  }
}

function drawCircle(event) {
  context.beginPath();
  context.arc(cursorPosition.x, cursorPosition.y, size, 0, 2 * Math.PI);
  context.closePath();
  context.fillStyle = color;
  context.fill();
  canvasImage = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
}

window.onload = function () {
  randomColor();
  canvas = document.getElementById('background');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext('2d');

  window.onresize = throttle(10, function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0,0, window.innerWidth, window.innerHeight);
    canvasImage && context.putImageData(canvasImage, 0, 0);
  });

  window.onmousemove = throttle(10, function (event) {
    cursorPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    drawCircle(event);
  });

  window.ontouchmove = throttle(10, function (event) {
    cursorPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    drawCircle(event);
  });
}
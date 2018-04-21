const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_BACKSPACE = 8
const KEY_ENTER = 13;
const KEY_ESCAPE = 27;
const KEY_SPACE = 32;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;
var mouseHeld = false;
var mouseCanvasY = 0;
var mouseCanvasX = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);
	canvas.addEventListener('mousedown', mousePressed);
	canvas.addEventListener('mouseup', mouseReleased);
	
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	//player.setupInput();
};

function keySet(keyEvent, setTo) {

}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	mouseCanvasX = Math.floor(mouseX * (canvas.width/canvas.clientWidth));
	mouseCanvasY = Math.floor(mouseY * (canvas.height/canvas.clientHeight));

	// console.log("mouseX = " + mouseCanvasX);
	// console.log("mouseY = " + mouseCanvasY);
};

function keyPressed(evt) {
	console.log("Key pressed: " + evt.keyCode);
	keySet(evt, true);
	
	switch(evt.keyCode) {
		case KEY_W:
			break;
		case KEY_A:
			break;
	}
};

function keyReleased(evt) {
	console.log("Key released: " + evt.keyCode);
	keySet(evt, false);
};

function mousePressed(evt) {
	mouseHeld = true;
};

function mouseReleased(evt) {
	mouseHeld = false;
};
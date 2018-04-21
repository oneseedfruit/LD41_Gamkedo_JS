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
const KEY_P = 80;
const KEY_H = 72;
const KEY_Q = 81;
const KEY_E = 69;

var mouseX = 0;
var mouseY = 0;
var mouseHeld = false;
var mouseCanvasY = 0;
var mouseCanvasX = 0;

var isKitchenMode = false;
var isDrivingMode = true;

var mainMenuState = true;
var helpState = false;

function setupInput() {
	canvas.addEventListener("mousemove", updateMousePos);
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
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;

	mouseCanvasX = Math.floor(mouseX * (canvas.width/canvas.clientWidth));
	mouseCanvasY = Math.floor(mouseY * (canvas.height/canvas.clientHeight));

	// console.log("mouseX = " + mouseCanvasX);
	// console.log("mouseY = " + mouseCanvasY);
};

function keyPressed(evt) {
	evt.preventDefault();
	//console.log("Key pressed: " + evt.keyCode);
	keySet(evt, true);
	
	switch(evt.keyCode) {
		case KEY_W:
		case KEY_UP_ARROW:
			break;
		case KEY_A:
		case KEY_LEFT_ARROW:
			break;
		case KEY_S:
		case KEY_DOWN_ARROW:
			break;
		case KEY_D:
		case KEY_RIGHT_ARROW:
			break;
        case KEY_SPACE:
            if (isDrivingMode && !mainMenuState && !helpState){
                 isKitchenMode = true;
                isDrivingMode = false;
            } else if (isKitchenMode) {
                isDrivingMode = true;
                isKitchenMode = false;
            }
            if (helpState) {
                mainMenuState = true;
                helpState = false;
            }
            if (launchPlantMode) {
                launchPlantMode = false;
                isDrivingMode = true;
            }
            if (launchMeatMode) {
                launchMeatMode = false;
                isDrivingMode = true;
            }
            break;
        case KEY_P: 
            if (mainMenuState) {
                isDrivingMode = true;
                mainMenuState = false;
            }
            if (helpState) {
                helpState = false;
                isDrivingMode = true;
            }
            break;
        case KEY_H:
            if (mainMenuState) {
                helpState = true;
                mainMenuState = false;
            } 
            break;
        case KEY_Q:
            if (isDrivingMode) {
                launchMeatMode = true;
                isDrivingMode = false;
            } else if (launchPlantMode) {
                launchMeatMode = true;
                launchPlantMode = false;
            } else if (isKitchenMode) {
                launchMeatMode = true;
                isKitchenMode = false;
            }
            break;
        case KEY_E:
            if (isDrivingMode) {
               launchPlantMode = true;
                isDrivingMode = false;   
            } else if (launchMeatMode) {
                launchPlantMode = true;
                launchMeatMode = false;
            } else if (isKitchenMode) {
                launchPlantMode = true;
                isKitchenMode = false;
            }
            break;
	}
};

function keyReleased(evt) {
	// console.log("Key released: " + evt.keyCode);
	keySet(evt, false);
};

function switchBackToDrivingMode(evt) {
    if (isKitchenMode == true) {
        isKitchenMode = false;
        console.log("kitchen mode = false")
        }
}

function mousePressed(evt) {
	mouseHeld = true;
};

function mouseReleased(evt) {
	mouseHeld = false;
};
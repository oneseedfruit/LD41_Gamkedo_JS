// Movement Keys
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_BACKSPACE = 8
const KEY_ENTER = 13;
const KEY_ESCAPE = 27;
const KEY_SPACE = 32;
const KEY_C = 67;
const KEY_P = 80;
const KEY_H = 72;
const KEY_Q = 81;
const KEY_E = 69;

var mouseX = 0;
var mouseY = 0;
var mouseHeld = false;
var mouseCanvasY = 0;
var mouseCanvasX = 0;


function setupInput() {
	canvas.addEventListener("mousemove", updateMousePos);
	canvas.addEventListener('mousedown', mousePressed);
	canvas.addEventListener('mouseup', mouseReleased);
	
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
};

function gameLevelInitialize(){
    //timer.secondsRemaining = 20;
    loadTrack(levels[level]);
    meatAmountSprite.setFrameIndex(2);
    vegAmountSprite.setFrameIndex(1);
    //timer.setupTimer();
}

function keySet(keyEvent, whichCar, setTo) {
    if(keyEvent.keyCode == KEY_A || keyEvent.keyCode == KEY_LEFT_ARROW) {
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if(keyEvent.keyCode == KEY_D || keyEvent.keyCode == KEY_RIGHT_ARROW) {
        whichCar.keyHeld_TurnRight = setTo;
    }
    if(keyEvent.keyCode == KEY_W || keyEvent.keyCode == KEY_UP_ARROW) {
        whichCar.keyHeld_Gas = setTo;
    }
    if(keyEvent.keyCode == KEY_S || keyEvent.keyCode == KEY_DOWN_ARROW) {
        whichCar.keyHeld_Reverse = setTo;
    }
}

function keySetPong(keyEvent, setTo) {
	if(keyEvent.keyCode == KEY_A || keyEvent.keyCode == KEY_LEFT_ARROW) {
        keyHeld_LeftPong = setTo;
    }
    if(keyEvent.keyCode == KEY_D || keyEvent.keyCode == KEY_RIGHT_ARROW) {
        keyHeld_RightPong = setTo;
    }
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
	if (isKitchenMode || (launchMeatMode || launchPlantMode)) {
    	keySetPong(evt, true);
    } else {
    	keySet(evt, playerCar, true);
	}
	
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
            break;
        case KEY_P: 
            if (mainMenuState) {
                isDrivingMode = true;
                mainMenuState = false;
                gameLevelInitialize();
            }
            if (helpState) {
                helpState = false;
                isDrivingMode = true;
                gameLevelInitialize();
            }
             if (creditsState) {
                creditsState = false;
                isDrivingMode = true;
                gameLevelInitialize();
            }
            
            break;
        case KEY_H:
            if (mainMenuState) {
                helpState = true;
                mainMenuState = false;
            }
            break;
        case KEY_C:
            if (mainMenuState) {
                creditsState = true;
                mainMenuState = false;
                isDrivingMode = false;
            }
            break;
        case KEY_Q:
            pongReleaseMeat();
            break;
        case KEY_E:
            pongReleaseVeg();
            break;
        case KEY_ENTER:
            if (gameOverState) {
                resetGame();
            }
            // if (isDrivingMode) {
            // level++;
            //    console.log(level);

            // loadTrack(levels[level]);
            // }
            
            break;
	}
};

function keyReleased(evt) {
	// console.log("Key released: " + evt.keyCode);
	if (isKitchenMode || (launchPlantMode || launchMeatMode)) {
    	keySetPong(evt, false);
    } else {
    	keySet(evt, playerCar, false);
	} 
};

function mousePressed(evt) {
	mouseHeld = true;
};

function mouseReleased(evt) {
	mouseHeld = false;
};
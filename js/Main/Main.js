var canvas, canvasContext;
var paused = false;

var playerCar = new carClass();
//var timer = new TimerClass();

var levelLoaded = false;

const FRAMES_PER_SECOND = 30;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	drawScreenBlack();
	var loadingText = "LOADING IMAGES";
	var textWidth = canvasContext.measureText(Math.floor(loadingText));
	colorText(loadingText, canvas.width/2 - textWidth.width * 2, canvas.height/2, 'white');
	loadImages();
	setUpImages();
	menuMusic.loopSong();
}

function imageLoadingDoneSoStartGame() {
	setInterval(updateAll, 1000/FRAMES_PER_SECOND);
	setupInput();
}

function loadTrack(whichLevel) {
	trackGrid = whichLevel.slice();
	playerCar.reset(hippoCarPic, "Angry Bird");
	DontCookMusic.loopSong();
}


function updateAll() {
	if(paused){
		return;
	}
	moveAll();
	drawAll();
	particles.update();
	checkFuelMeter();
}

function moveAll() {
	if (isKitchenMode || (launchMeatMode || launchPlantMode)) {
		pongPaddleMove();
	} else {
		playerCar.move();
	}
	cameraFollow();
}

function drawAll() {
	//particles.clear();
    setGameStates();
    particles.draw();
    if (!mainMenuState && !helpState && !creditsState) {
    	fuelMeterSprite.render(canvas.width/2 - (fuelMeterSprite.width/9)/2,15);
    }
    /*if( isKitchenMode || isDrivingMode ){
	    //timer.drawTimer();
	    //timer.alertMessage();
	    //drawFullnessLevel();
    }*/
}

function checkFuelMeter() {
	var currentFrameIndex = fuelMeterSprite.getFrameIndex();
	var fuelMeterSpriteMaxFrames = 9;
	if (currentFrameIndex == fuelMeterSpriteMaxFrames - 1) {
		isKitchenMode = false;
        isDrivingMode = false;
        foodInPlay = false;
		gameOverState = true;
	} 
}
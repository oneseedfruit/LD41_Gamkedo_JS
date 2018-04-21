var canvas, canvasContext;
var paused = false;

var playerCar = new carClass();

const FRAMES_PER_SECOND = 30;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	var loadingText = "LOADING IMAGES";
	var textWidth = canvasContext.measureText(Math.floor(loadingText));  
	colorText(loadingText, canvas.width/2 - textWidth.width * 2, canvas.height/2, 'white');
	loadImages();
}

function imageLoadingDoneSoStartGame() {
	// Opening cutscene / logos could go here
	startGame();
}

function startGame() {
	setInterval(updateAll, 1000/FRAMES_PER_SECOND);
	setupInput();
	loadTrack(levelOne);
}

function loadTrack(whichLevel) {
	trackGrid = whichLevel.slice();
	playerCar.reset(carPic, "Angry Bird");
}


function updateAll() {
	if(paused){
		return;
	}

	moveAll();
	drawAll();
}

function moveAll() {
   playerCar.move();
   updateGameStates();

}

function drawAll() {
     colorRect(0,0, canvas.width,canvas.height, 'black');
     setGameStates();
   
     

}
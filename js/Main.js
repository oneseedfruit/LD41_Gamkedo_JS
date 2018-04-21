var canvas, canvasContext;
var paused = false;

const FRAMES_PER_SECOND = 30;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');
	loadImages();
}

function imageLoadingDoneSoStartGame() {
	// Opening cutscene / logos could go here
	startGame();
}

function startGame() {
	setInterval(updateAll, 1000/FRAMES_PER_SECOND);
	
	setupInput();
	//loadTrack();
}

function updateAll() {
	if(paused){
		return;
	}

	moveAll();
	drawAll();
}

function moveAll() {

	//player.move();

}

function drawAll() {
	//drawTrack();
	//drawItems();
}

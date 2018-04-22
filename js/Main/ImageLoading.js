var hippoCarPic = document.createElement("img");
var hippoCarPicLoaded = false;

var hippoCarPicTailwag = document.createElement("img");
var hippoCarPicTailwagLoaded = false;
var hippoCarPicTailwagSprite;

var particlePic = document.createElement("img");

var trackPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
		picsToLoad--;
		// console.log(picsToLoad);
		if(picsToLoad == 0) {
			imageLoadingDoneSoStartGame();
		}
	}

function beginLoadingImage (imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady
	imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

function setUpImages() {
	hippoCarPicTailwagSprite = sprite({
		context: canvasContext,
		width: 408,
		height: 136,
		image: hippoCarPicTailwag,
		loop: true,
		numberOfFrames: 3,
		ticksPerFrame: 10,
	});
	hippoCarPicTailwag.onload = function () {
		hippoCarPicTailwag = true;
	}
	hippoCarPicTailwag.src = "images/foodTruck_spritesheet_tailwag.png";
}

function loadImages() {
	var imageList = [
	{varName: hippoCarPic, theFile: "foodTruck.png"},
	{varName:particlePic, theFile: "particle.png"},
	{TrackType:TRACK_ROAD, theFile: "track_road.png"},
	{TrackType:TRACK_WALL, theFile: "track_wall.png"},
	{TrackType:TRACK_GOAL, theFile: "track_goal.png"},
	];

	picsToLoad = imageList.length;

	for(var i=0; i<imageList.length; i++){
		if(imageList[i].varName != undefined) {
			beginLoadingImage (imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode(imageList[i].TrackType, imageList[i].theFile);
		}
	}
}

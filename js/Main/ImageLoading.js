var hippoCarPic = document.createElement("img");
var particlePic = document.createElement("img");

var hippoCarPicTailwag = document.createElement("img");
var hippoCarPicTailwagSprite;

var fuelMeterPic = document.createElement("img");
var fuelMeterSprite;

var meatBallPic = document.createElement("img");
var meatBallSprite;

var vegBallPic = document.createElement("img");
var vegBallSprite;

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
	hippoCarPicTailwag.src = "images/foodTruck_tailwag.png";

	fuelMeterSprite = sprite({
		context: canvasContext,
		width: 648,
		height: 15,
		image: fuelMeterPic,
		loop: false,
		numberOfFrames: 9,
		ticksPerFrame: 0,
	});
	fuelMeterPic.src = "images/fuelMeter.png";

	meatBallSprite = sprite({
		context: canvasContext,
		width: 96,
		height: 32,
		image: meatBallPic,
		loop: false,
		numberOfFrames: 3,
		ticksPerFrame: 0,
	});
	meatBallPic.src = "images/pong_meatball_all.png";

	vegBallSprite = sprite({
		context: canvasContext,
		width: 96,
		height: 32,
		image: vegBallPic,
		loop: false,
		numberOfFrames: 3,
		ticksPerFrame: 0,
	});
	vegBallPic.src = "images/pong_vegeball_all.png";
}

function loadImages() {
	var imageList = [
	{varName: hippoCarPic, theFile: "foodTruck.png"},
	{varName: particlePic, theFile: "particle.png"},

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

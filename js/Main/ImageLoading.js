// still images
var menuPic = document.createElement("img");
var hippoCarPic = document.createElement("img");
var particlePic = document.createElement("img");
var panPaddle = document.createElement("img");

//sprites
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
		//console.log("pics left to load: " + picsToLoad);
		picsToLoad--;
		if(picsToLoad == 0) {
			imageLoadingDoneSoStartGame();
		}
	}

function beginLoadingImage (imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

//Only for sprites
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
	{varName: menuPic, theFile: "menu.png"},

	{varName: hippoCarPic, theFile: "foodTruck.png"},
	{varName: particlePic, theFile: "particle.png"},
    {varName: panPaddle, theFile: "pan.png"},

	{TrackType: TRACK_ROAD, theFile: "Level_Tile_Road.png"},
	{TrackType: TRACK_WALL, theFile: "Level_Tile_Edge_Road_Obelisk.png"},
	{TrackType: TRACK_GOAL, theFile: "Level_Tile_FinishLine.png"},
	{TrackType: TRACK_DIRT, theFile: "Level_Tile_Dirt.png"},
	{TrackType: TRACK_BOULDER, theFile: "Level_Tile_Boulder.png"},
	{TrackType: TRACK_OBELISK, theFile: "Level_Tile_Obelisk.png"},
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

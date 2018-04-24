// still images
var menuPic = document.createElement("img");
var winScreenPic = document.createElement("img");
var kitchenPic = document.createElement("img");
var loseScreenPic = document.createElement("img");
var hippoCarPic = document.createElement("img");
var particlePic = document.createElement("img");
var panPaddle = document.createElement("img");
var bottomPaddle = document.createElement("img");
var topPaddle = document.createElement("img");

//sprites
var hippoCarPicTailwag = document.createElement("img");
var hippoCarPicTailwagSprite;

var fuelMeterPic = document.createElement("img");
var fuelMeterSprite;

var meatBallPic = document.createElement("img");
var meatBallSprite;

var vegBallPic = document.createElement("img");
var vegBallSprite;

var meatAmountPic = document.createElement("img");
var meatAmountSprite;

var vegAmountPic = document.createElement("img");
var vegAmountSprite;

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

	meatAmountSprite = sprite({
		context: canvasContext,
		width: 418,
		height: 290,
		image: meatAmountPic,
		loop: false,
		numberOfFrames: 11,
		ticksPerFrame: 0,
	});
	meatAmountPic.src = "images/meatAmountBar.png";

	vegAmountSprite = sprite({
		context: canvasContext,
		width: 418,
		height: 290,
		image: vegAmountPic,
		loop: false,
		numberOfFrames: 11,
		ticksPerFrame: 0,
	});
	vegAmountPic.src = "images/vegeAmountBar.png";
}

function loadImages() {
	var imageList = [
	{varName: menuPic, theFile: "menu.png"},
    {varName: kitchenPic, theFile: "kitchenbg.png"},
    {varName: winScreenPic, theFile: "winScreen.png"},
    {varName: loseScreenPic, theFile: "losescreen.png"},

	{varName: hippoCarPic, theFile: "foodTruck.png"},
	{varName: particlePic, theFile: "particle.png"},
    {varName: bottomPaddle, theFile: "bottomplayer.png"},
    {varName: topPaddle, theFile: "topplayer.png"},

	{TrackType: TRACK_ROAD, theFile: "Level_Tile_Road.png"},
	{TrackType: TRACK_WALL, theFile: "Level_Tile_Edge_Road_Obelisk.png"},
	{TrackType: TRACK_GOAL, theFile: "Level_Tile_FinishLine.png"},
	{TrackType: TRACK_DIRT, theFile: "Level_Tile_Dirt.png"},
	{TrackType: TRACK_BOULDER, theFile: "Level_Tile_Boulder.png"},
	{TrackType: TRACK_OBELISK, theFile: "Level_Tile_Obelisk.png"},
	{TrackType: TRACK_DIRT_VEGE, theFile: "Level_Tile_Dirt_Vege2.png"},
	{TrackType: TRACK_DIRT_MEAT, theFile: "Level_Tile_Dirt_Meat2.png"},
	{TrackType: TRACK_GROUND_VEGE, theFile: "Level_Tile_Dirt_Vege2.png"},
	{TrackType: TRACK_GROUND_MEAT, theFile: "Level_Tile_Dirt_Meat2.png"},

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

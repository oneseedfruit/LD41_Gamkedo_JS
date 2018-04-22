var carPic = document.createElement("img");
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

function loadImages() {
	var imageList = [
	{varName:carPic, theFile: "car.png"},
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
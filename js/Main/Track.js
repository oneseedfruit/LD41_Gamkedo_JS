const TRACK_W = 150;
const TRACK_H = 150;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var levelOne = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0, 0, 0, 5, 4, 6,
				 6, 0, 0, 5, 4, 5, 5, 4, 4, 4, 4, 4, 4, 5, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 5, 4, 4, 5, 4, 4, 4, 4, 5, 4, 5, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 5, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 5, 4, 4, 4, 4, 5, 5, 4, 4, 5, 5, 0, 0, 0, 4, 4, 6,
				 6, 0, 0, 5, 4, 4, 4, 4, 4, 4, 5, 5, 4, 5, 0, 0, 0, 4, 5, 6,
				 6, 2, 0, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 6,
				 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 4, 4, 6,
				 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 6,
				 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 6,
				 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];

var trackGrid = [];			 
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_DIRT = 4;
const TRACK_BOULDER = 5;
const TRACK_OBELISK = 6;

const passableTiles =	[
	TRACK_ROAD,
	TRACK_DIRT,
	TRACK_GOAL
];


function trackTypeIsPassable(checkTrackType)
{
	for (var i = 0; i < passableTiles.length; i++) {
		if(checkTrackType == passableTiles[i]) {
			return true;
		}
	} // check each passable tile
	return false;
} // end trackTypeIsPassable

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord]
	} else {
		return TRACK_WALL;
	}
}

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) { 
			var tileKindHere = trackGrid[arrayIndex];
			var useImg = trackPics[tileKindHere];
			if (tileVisible(drawTileX,drawTileY)) {
				if (!useImg)
					console.log("Missing trackPics[" + tileKindHere + "] in drawTracks!");
				else
					canvasContext.drawImage(useImg,drawTileX,drawTileY);
			}
			drawTileX += TRACK_W;	
			arrayIndex++;
			
		} // end of for each col
			drawTileY += TRACK_H;
			drawTileX = 0;
	} // end of for each row
} // end of drawTracks func

function tileVisible(tx,ty) {
	//console.log("tileVisible "+tx+","+ty+" must be inside " + camPanX+","+camPanY+" and "+camPanX+canvas.width+","+camPanY+canvas.height);
	return (
		(tx >= camPanX -TRACK_W) &&
		(ty >= camPanY - TRACK_H) &&
		(tx <= camPanX+canvas.width) &&
		(ty <= camPanY+canvas.height));
}

function carTrackHandling(whichCar) {
	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
	var carTrackRow = Math.floor(whichCar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );

		if(trackTypeIsPassable(tileHere)){
			if(tileHere == TRACK_GOAL) {
				console.log(whichCar.name + " WINS!");
				loadTrack(levelOne);
			} 
			whichCar.friction = getFrictionForTileType(tileHere);
		}

		else{
			// next two lines added to fix a bug, mentioned in video 9.6
			// undoes the car movement which got it onto the wall
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

			whichCar.speed *= -0.5;
			
		} // end of track found
	} // end of valid col and row
} // end of carTrackHandling func


function getFrictionForTileType(tileKindHere) {
	switch(tileKindHere) {
		case TRACK_DIRT:
			return TRACK_FRICTION_DIRT;
		default:
			return TRACK_FRICTION_NORMAL;
	}
}
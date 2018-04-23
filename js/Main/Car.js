
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.09;
const MIN_SPEED_TO_TURN = 0.5;

const TRACK_FRICTION_DIRT = 0.80;
const TRACK_FRICTION_NORMAL = 0.95;


function carClass() {
	this.x = 75;
	this.y = 75;
	this.width = 110;
	this.height = 96;
	this.distanceTravelled = 0;
	this.ang = 0;
	this.speed = 0;
	this.myCarPic; // which picture to use
	this.name = "Untitled Car";

	this.keyHeld_Gas = false;
	this.keyHeld_Reverse = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;
	
	this.camX = 75;
	this.camY = 75;
	this.camDist = 28;
	this.friction = 1;

	// this.controlKeyUp;
	// this.controlKeyRight;
	// this.controlKeyDown;
	// this.controlKeyLeft;

	// this.setupInput = function(upKey, rightKey, downKey, leftKey) {
	// 	this.controlKeyUp = upKey;
	// 	this.controlKeyRight = rightKey;
	// 	this.controlKeyDown = downKey;
	// 	this.controlKeyLeft = leftKey;
	// }

	this.reset = function(whichImage, carName) {
		this.name = carName;
		this.myCarPic = whichImage;
		this.speed = 0;

		for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
				if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.ang = -Math.PI/2;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO PLAYER START FOUND!");
	} // end of carReset func

	this.move = function() {
		this.speed *= this.friction;

		if(this.keyHeld_Gas) {
			this.speed += DRIVE_POWER;
		}
		if(this.keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
		}
		if(Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
			if(this.keyHeld_TurnLeft) {
				this.ang -= TURN_RATE;
			}
			if(this.keyHeld_TurnRight) {
				this.ang += TURN_RATE;
			}
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;
		this.distanceTravelled += (Math.abs(Math.cos(this.ang) * this.speed)) + Math.abs((Math.sin(this.ang) * this.speed));
		if (this.distanceTravelled >= 315) {
			var currentFrameIndex = fuelMeterSprite.getFrameIndex();
			var fuelMeterSpriteMaxFrames = 9;
			currentFrameIndex++;
			this.distanceTravelled = 0;
			if (currentFrameIndex < fuelMeterSpriteMaxFrames)
				fuelMeterSprite.setFrameIndex(currentFrameIndex);
		} 
		
		//Cam point leads player around
		this.camX = this.x + Math.cos(this.ang) * this.camDist * this.speed;
		this.camY = this.y + Math.sin(this.ang) * this.camDist * this.speed;

		carTrackHandling(this);
	}

	this.draw = function() {
		  //drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
          hippoCarPicTailwagSprite.renderHippo(this.x,this.y,this.ang); 
          hippoCarPicTailwagSprite.update();
	}
}

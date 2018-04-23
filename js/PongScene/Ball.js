var crossingMiddle = false;

// Ball class constructor: 1 class per file, file name is "class name".js
function Ball(canvas) {
    this.ballX = 400 - PADDLE_THICKNESS/2;
    this.ballY = paddle2X + (PADDLE_THICKNESS / 2);
    
    this.ballSpeedX = 10;
    this.ballSpeedY = 10;

    this.cookedLevel = 0;
    
    this.meatDraw = function() {
        meatBallSprite.render(this.ballX - ((meatBallSprite.width/3)/2), this.ballY - meatBallSprite.height/2);
    };
    
    this.plantDraw = function() {
        vegBallSprite.render(this.ballX - ((vegBallSprite.width/3)/2), this.ballY - vegBallSprite.height/2);
    };
    
    this.ballMove = function() {
        if (this.ballY >= canvas.height) {
            foodInPlay = false;
            launchPlantMode = false;
            launchMeatMode = false;
          /*  if (fullnessLevel > 0) {
               fullnessLevel-= 1;   
            } else if (fullnessLevel == 0) {
                isKitchenMode = false;
                isDrivingMode = false;
                gameOverState = true;
            }*/
            return;
        }

        if (this.ballY <= 0) {
            launchPlantMode = false;
            launchMeatMode = false;
            foodInPlay = false;
            if (this.cookedLevel <= 2) {
                DecreaseFrameIndexBasedOnFoodQuality(2);
            } else if (this.cookedLevel <= 6) {
                DecreaseFrameIndexBasedOnFoodQuality(6);
            } else if (this.cookedLevel >= 7) {
                DecreaseFrameIndexBasedOnFoodQuality(1);
            }
            return; 
        } 
        
        if (this.ballX <= 0 || this.ballX >= canvas.width) {
            this.ballSpeedX *= -1;
        }

        if (this.ballY < canvas.height/2 + cookingThickness/2 &&
            this.ballY > canvas.height/2 - cookingThickness/2 &&
            !crossingMiddle) {
            crossingMiddle = true;
            smokeScreenEffect(this.ballX, this.ballY);
            this.cookedLevel++;
            var cookedToPerfection = false;
            var burntToACrisp = false;
            if (launchMeatMode) {
                if (this.cookedLevel == 3 && !cookedToPerfection) {
                    var currentFrameIndex = meatBallSprite.getFrameIndex();
                    currentFrameIndex++;
                    meatBallSprite.setFrameIndex(currentFrameIndex);
                    cookedToPerfection = true;
                }
                if (this.cookedLevel == 7 && !burntToACrisp) {
                    var currentFrameIndex = meatBallSprite.getFrameIndex();
                    currentFrameIndex += 2;
                    meatBallSprite.setFrameIndex(currentFrameIndex);
                    burntToACrisp = true;
                }
                if (this.cookedLevel >= 10 && burntToACrisp) {
                    launchMeatMode = false;
                    foodInPlay = false;
                }
            } // end of if launchMeatMode
        } // end of is ball at the middle?

        if (this.ballY > paddle1Y && this.ballY < (paddle1Y + PADDLE_HEIGHT) 
        && this.ballX > paddle1X && this.ballX < paddle1X + PADDLE_THICKNESS) {
            crossingMiddle = false;
            var deltaX = this.ballX-(paddle1X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }

        if (this.ballY > paddle2Y && this.ballY < (paddle2Y + PADDLE_HEIGHT) 
        && this.ballX > paddle2X && this.ballX < paddle2X + PADDLE_THICKNESS) {
            crossingMiddle = false;
            var deltaX = this.ballX-(paddle2X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }

        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;
    }
    
    this.ballReset = function() {
        this.ballX = 100;
        this.ballY = 100;
        this.ballSpeedX = 8;
        this.ballSpeedY = 8;
        this.cookedLevel = 0;
        meatBallSprite.reset();
        vegBallSprite.reset();
        cookedToPerfection = false;
    }
}

function DecreaseFrameIndexBasedOnFoodQuality(Quality) {
    var currentFrameIndex = fuelMeterSprite.getFrameIndex();
    currentFrameIndex -= Quality;
    if (currentFrameIndex < 0) {
        currentFrameIndex = 0;
    }
    fuelMeterSprite.setFrameIndex(currentFrameIndex);
};
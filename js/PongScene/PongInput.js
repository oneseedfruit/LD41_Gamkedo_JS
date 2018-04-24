var keyHeld_LeftPong = false;
var keyHeld_RightPong = false;

function switchBetweenDrivingAndCooking() {

    //kitchen mode code
    if (isDrivingMode && !mainMenuState && !helpState) {
        isKitchenMode = true;
        isDrivingMode = false;
        // console.log("kitchen mode");
        // clearInterval(countdownTimer);
       
    }

    //drive mode code
     else if (isKitchenMode) {
        isDrivingMode = true;
        isKitchenMode = false;
        launchPlantMode = false;
        launchMeatMode = false;
        foodInPlay = false;
        //  if(timer.isRunning){p
        //     timer.setupTimer();
        // }

    }

    //main menu
    if (helpState || creditsState) {
        mainMenuState = true;
        helpState = false;
        creditsState = false;
    }

    ball.ballX = 400 - PADDLE_THICKNESS/2;
    ball.ballY = paddle2X + (PADDLE_THICKNESS / 2);
    paddle2X = 400 - PADDLE_THICKNESS/2;
    paddle2Y = 0 + PADDLE_DIST_FROM_EDGE;
}

function pongReleaseMeat() {
    if (isKitchenMode && !foodInPlay) {
        var currentFrameIndex = meatAmountSprite.getFrameIndex();
        if (currentFrameIndex == 0) {
            return;
        }
        launchMeatMode = true;
        foodInPlay = true;
        meatAmountSprite.setFrameIndex(currentFrameIndex - 1);
        ball.ballReset();
    }
}

function pongReleaseVeg() {
    if (isKitchenMode && !foodInPlay) {
        var currentFrameIndex = vegAmountSprite.getFrameIndex();
        if (currentFrameIndex == 0) {
            return;
        }
        launchPlantMode = true;
        foodInPlay = true;
        vegAmountSprite.setFrameIndex(currentFrameIndex - 1);
        ball.ballReset();
    }
}

function pongPaddleMove() {
    if (keyHeld_LeftPong) {
        paddle1X -= PADDLE_SPEED;
        if (paddle1X <= 0 ) {
            paddle1X = 0;
        }
    }

    else if (keyHeld_RightPong) {
        paddle1X += PADDLE_SPEED;
        if (paddle1X >= canvas.width) {
            paddle1X = canvas.width;
        }
    }
}
var keyHeld_LeftPong = false;
var keyHeld_RightPong = false;

function switchBetweenDrivingAndCooking() {
    if (isDrivingMode && !mainMenuState && !helpState) {
        isKitchenMode = true;
        isDrivingMode = false;
    } else if (isKitchenMode) {
        isDrivingMode = true;
        isKitchenMode = false;
        launchPlantMode = false;
        launchMeatMode = false;
        foodInPlay = false;
    }
    if (helpState) {
        mainMenuState = true;
        helpState = false;
    }

    ball.ballX = 400 - PADDLE_THICKNESS/2;
    ball.ballY = paddle2X + (PADDLE_THICKNESS / 2);
    paddle2X = 400 - PADDLE_THICKNESS/2;
    paddle2Y = 0 + PADDLE_DIST_FROM_EDGE;
}

function pongReleaseMeat() {
    if (isKitchenMode && !foodInPlay) {
        launchMeatMode = true;
        foodInPlay = true;
        // meat supply -1;
        ball.ballReset();
    }
}

function pongReleaseVeg() {
    if (isKitchenMode && !foodInPlay) {
        launchPlantMode = true;
        foodInPlay = true;
        // veggie supply -1;
        ball.ballReset();
    }
}

function pongPaddleMove() {
    if (keyHeld_LeftPong) {
        paddle1X -= PADDLE_SPEED;
        if (paddle1X <= 10 ) {
            paddle1X = 10;
        }
    }

    if (keyHeld_RightPong) {
        paddle1X += PADDLE_SPEED;
        if (paddle1X >= 790 - PADDLE_THICKNESS) {
            paddle1X = 790 - PADDLE_THICKNESS;
        }
    }
}
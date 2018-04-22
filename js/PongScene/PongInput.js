var keyHeld_LeftPong = false;
var keyHeld_RightPong = false;

function switchBetweenDrivingAndCooking() {
    if (isDrivingMode && !mainMenuState && !helpState) {
        isKitchenMode = true;
        isDrivingMode = false;
    } else if (isKitchenMode) {
        isDrivingMode = true;
        isKitchenMode = false;
    }
    if (helpState) {
        mainMenuState = true;
        helpState = false;
    }
    if (launchPlantMode) {
        launchPlantMode = false;
        isDrivingMode = true;
    }
    if (launchMeatMode) {
        launchMeatMode = false;
        isDrivingMode = true;
    }

    ball.ballX = 400 - PADDLE_THICKNESS/2;
    ball.ballY = paddle2X + (PADDLE_THICKNESS / 2);
    paddle2X = 400 - PADDLE_THICKNESS/2;
    paddle2Y = 0 + PADDLE_DIST_FROM_EDGE;
}

function pongPressedP() {
    if (mainMenuState) {
        isDrivingMode = true;
        mainMenuState = false;
    }
    if (helpState) {
        helpState = false;
        isDrivingMode = true;
    }
}

function pongPressedH() {
    if (mainMenuState) {
        helpState = true;
        mainMenuState = false;
    }
}

function pongReleaseMeat() {
    /* if (isDrivingMode) {
        launchMeatMode = true;
        isDrivingMode = false;
    } else if (launchPlantMode) {
        launchMeatMode = true;
        launchPlantMode = false;
    }*/ if (isKitchenMode) {
        //launchPlantMode = false;
        launchMeatMode = true;
        foodInPlay = true;
        // meat supply -1;
        ball.ballReset();
    }
}

function pongPressedE() {
    /*if (isDrivingMode) {
        launchPlantMode = true;
        isDrivingMode = false;
    } else if (launchMeatMode) {
        launchPlantMode = true;
        launchMeatMode = false;
    }*/ if (isKitchenMode) {
        //launchMeatMode = false;
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
var keyHeld_LeftPong = false;
var keyHeld_RightPong = false;

function pongPressedSpace() {
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

function pongPressedQ() {
    if (isDrivingMode) {
        launchMeatMode = true;
        isDrivingMode = false;
    } else if (launchPlantMode) {
        launchMeatMode = true;
        launchPlantMode = false;
    } else if (isKitchenMode) {
        launchMeatMode = true;
        isKitchenMode = false;
    }
}

function pongPressedE() {
    if (isDrivingMode) {
        launchPlantMode = true;
        isDrivingMode = false;
    } else if (launchMeatMode) {
        launchPlantMode = true;
        launchMeatMode = false;
    } else if (isKitchenMode) {
        launchPlantMode = true;
        isKitchenMode = false;
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
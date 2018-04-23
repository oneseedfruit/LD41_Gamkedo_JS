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
        if (paddle1X <= 0 ) {
            paddle1X = 0;
        }
    }

    if (keyHeld_RightPong) {
        paddle1X += PADDLE_SPEED;
        if (paddle1X >= canvas.width) {
            paddle1X = canvas.width
        }
    }
}
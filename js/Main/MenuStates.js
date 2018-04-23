var foodInPlay = false;

var isKitchenMode = false;
var isDrivingMode = true;

var mainMenuState = true;
var helpState = false;
var gameOverState = false;

function drawMainMenu() {
    colorRect(0, 0, canvas.width, canvas.height, "black");
}

function showMenuText() {
    colorText("Death Road To McGamkedonalds", canvas.width/2, 200, "white", "30px Arial", "center", 1);
    colorText("[P]lay", canvas.width/2, 300, "white", "20px Arial", "center", 1);
    colorText("[H]elp", canvas.width/2, 350, "white", "20px Arial", "center", 1);
}

function drawHelpScreen() {
     colorRect(0, 0, canvas.width, canvas.height);
}

function showHelpScreenText() {
    colorText("How To Play", canvas.width/2, 50, "white", "30px Arial", "center", 1);
    colorText("Vehicle Mode:", 150, 150, "white", "20px Arial", "left", 1);
    colorText("Movement: W, A, S, D", 150, 180, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen: SPACE, then in Kitchen Mode stop and wait for Q or E to be pressed", 150, 210, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen and Launch Meat: Q", 150, 240, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen and Launch Plant: E", 150, 270, "white", "16px Arial", "left", 1);
    colorText("Gather Ingredient: SPACE", 150, 300, "white", "16px Arial", "left", 1);
    colorText("Kitchen Mode:", 150, 350, "white", "20px Arial", "left", 1);
    colorText("Movement: A, D", 150, 380, "white", "16px Arial", "left", 1);
    colorText("Switch to Vehicle: SPACE", 150, 410, "white", "16px Arial", "left", 1);
    colorText("Press  [SPACE]  To Return To Menu Or  [P]  to Play", canvas.width/2, 500, "white", "16px Arial", "center", 1);
}

function setGameStates() {
     if (mainMenuState) {
        drawMainMenu();
        showMenuText(); 
         if(DontCookMusic.isPlaying){
            DontCookMusic.pauseSound();
        }       
        return;
    };
    
    if (helpState) {
        drawHelpScreen();
        showHelpScreenText();
        return;
    };
    
    if (isKitchenMode) {
        kitchenStuff();
        movePaddleAI();
        if (foodInPlay) {
            if (launchPlantMode) {
                ball.plantDraw();
                return;
            }
            if (launchMeatMode) {
                ball.meatDraw();
                return;
            }
        } else if (!foodInPlay) {
            if (ball.ballY <= 0) {
                var stateText = "Hippogriff fed!";
                var measuredText = canvasContext.measureText(Math.floor(stateText));
                colorText(stateText,canvas.width/2 - measuredText.width/2 ,canvas.height/1.25,
                            "black","30px Arial", "center", 1);
            } else if (ball.ballY >= canvas.height) {
                var stateText = "Food lost...";
                var measuredText = canvasContext.measureText(Math.floor(stateText));
                colorText(stateText,canvas.width/2 - measuredText.width/2 ,canvas.height/1.25,
                            "black","30px Arial", "center", 1);
            }
        }
        return;
    };
    
    if (isDrivingMode) {
        if(menuMusic.isPlaying){
            menuMusic.pauseSound();
        }

        canvasContext.save(); // needed to undo this .translate() used for scroll
        // this next line is like subtracting camPanX and camPanY from every
        // canvasContext draw operation up until we call canvasContext.restore
        // this way we can just draw them at their "actual" position coordinates

        canvasContext.translate(-camPanX,-camPanY);
        drawTracks();
        playerCar.draw();
        canvasContext.restore();
        fuelMeterSprite.render(canvas.width/2 - (fuelMeterSprite.width/9)/2,15);
        return;
    }
    if (gameOverState) {
        drawMainMenu();
        colorText("you lose!\n .Press enter to go to menu", canvas.width/2, canvas.height/2, "white", "20px Arial", "center", 1);
    }
}

function updateGameStates() {
     if (mainMenuState) {
        return;
    }
    if (helpState) {
        return;
    }
    if (isKitchenMode) {
        if (launchMeatMode || launchPlantMode) {
            ball.ballMove();
            return;
        }
        return;
    }
    if (isDrivingMode) {
        return;
    }
    if (gameOverState) {
        return;
    }
}

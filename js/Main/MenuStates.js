var foodInPlay = false;

var isKitchenMode = false;
var isDrivingMode = true;

var mainMenuState = true;
var helpState = false;
var gameOverState = false;
var creditsState = false;

function drawMainMenu() {
    // colorRect(0, 0, canvas.width, canvas.height, "black");
    canvasContext.drawImage(menuPic, 0, 0);
}


// function showMenuText() {
//     colorText("Death Road To McGamkedonalds", canvas.width/2, 200, "white", "30px Arial", "center", 1);
//     colorText("[P]lay", canvas.width/2, 300, "white", "20px Arial", "center", 1);
//     colorText("[H]elp", canvas.width/2, 350, "white", "20px Arial", "center", 1);
//     colorText("[C]redits", canvas.width/2, 400, "white", "20px Arial", "center", 1);
// }



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

function showCreditsText() {
    colorText("CREDITS", canvas.width/2, 50, "white", "30px Arial", "center", 1);
    colorText("Charleen Andrew: Truck game art, Food art ", 150, 150, "white", "16px Arial", "left", 1);
    colorText("Randy Tan: ", 150, 180, "white", "16px Arial", "left", 1);
    colorText("Vignesh Ramesh: Car movement, Menu and Game over music, Camera follow", 150, 210, "white", "16px Arial", "left", 1);
    colorText("Harleen Dualan: Pong/ Kitchen Scenne, Game art", 150, 240, "white", "16px Arial", "left", 1);
    colorText("Nick: Frame rate optimizaiton", 150, 270, "white", "16px Arial", "left", 1);
    colorText("Terrence McDonnell: Track code, main game code, Food Counter", 150, 300, "white", "16px Arial", "left", 1);
    colorText("Simon Hoffiz: Level Design & Level Art", 150, 330, "white", "16px Arial", "left", 1);
    colorText("Asix Jin: Main game music", 150, 360, "white", "16px Arial", "left", 1);
    colorText("Cameron button: Refrigerator idea", 150, 390, "white", "16px Arial", "left", 1);
    colorText("Press  [SPACE]  To Return To Menu Or  [P]  to Play", canvas.width/2, 500, "white", "20px Arial", "center", 1);
}


function setGameStates() {
     if (mainMenuState) {
        drawMainMenu();
        // showMenuText(); 
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
                ball.ballMove();
                ball.plantDraw();
                return;
            }
            if (launchMeatMode) {
                ball.ballMove();
                ball.meatDraw();
                return;
            }
        } else if (!foodInPlay) {
            if (ball.ballY <= 0) {
                var stateText = "Hippogriff fed!";
                var measuredText = canvasContext.measureText(Math.floor(stateText));
                colorText(stateText,canvas.width/2 - measuredText.width/2 ,canvas.height/1.25,
                            "black","30px Arial", "center", 1);
                fullnessLevel++;
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
        drawHelpScreen();
        colorText("You lose!\n .Press [Enter] to go to menu", canvas.width/2, canvas.height/2, "white", "20px Arial", "center", 1);
    }
    if (creditsState) {
        drawHelpScreen();
        showCreditsText();
    }
}
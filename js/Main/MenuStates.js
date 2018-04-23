var foodInPlay = false;

var isKitchenMode = false;
var isDrivingMode = true;

var winState = false;
var gameOverState = false;

var mainMenuState = true;
var helpState = false;
var creditsState = false;

function drawMainMenu() {
    canvasContext.drawImage(menuPic, 0, 0);
}

// function showMenuText() {
//     colorText("Death Road To McGamkedonalds", canvas.width/2, 200, "white", "30px Arial", "center", 1);
//     colorText("[P]lay", canvas.width/2, 300, "white", "20px Arial", "center", 1);
//     colorText("[H]elp", canvas.width/2, 350, "white", "20px Arial", "center", 1);
//     colorText("[C]redits", canvas.width/2, 400, "white", "20px Arial", "center", 1);
// }

function drawScreenBlack() {
     colorRect(0, 0, canvas.width, canvas.height, "black");
}

function showHelpScreenText() {
    colorText("How To Play", canvas.width/2, 50, "white", "30px Arial", "center", 1);
    colorText("Vehicle Mode:", 150, 150, "white", "20px Arial", "left", 1);
    colorText("Movement: W, A, S, D", 150, 180, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen: SPACE, then in Kitchen Mode stop and wait for Q or E to be pressed", 150, 210, "white", "16px Arial", "left", 1);
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
        drawScreenBlack();
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
                var stateText = "Hippogriff Fed!";
             /*   colorText(stateText,canvas.width/2 - measuredText.width/2 ,canvas.height/1.25,
                            "black","30px Arial", "center", 1);*/
                drawStroked(stateText,canvas.width/2,100, "#983f5e","30px Arial", "center", 1)
            } else if (ball.ballY >= canvas.height) {
                var stateText = "Food Lost...";
                /*colorText(stateText,canvas.width/2 - measuredText.width/2 ,canvas.height/1.25,
                            "black","30px Arial", "center", 1);*/
                drawStroked(stateText,canvas.width/2,canvas.height/1.25,
                            "#983f5e","30px Arial", "center", 1)
            }
        }
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
        return;
    }
    if (gameOverState) {        
        
        colorRect(0,0, canvas.width,canvas.height, "red");
        colorText("You lose!\n .Press [Enter] to go to menu", canvas.width/2, canvas.height/2, "white", "20px Arial", "center", 1);
    }
    if (winState) {
        canvasContext.drawImage(winScreenPic, 0, 0);
        DontCookMusic.pauseSound();
    }

    if (creditsState) {
        drawScreenBlack();
        showCreditsText();
    }
}
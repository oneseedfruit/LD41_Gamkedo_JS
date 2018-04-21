
function drawMainMenu() {
    colorRect(0, 0, canvas.width, canvas.height);
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
        return;
    }
    
    if (helpState) {
        drawHelpScreen();
        showHelpScreenText();
        return;
    }
    
    if (isKitchenMode) {
        kitchenStuff()
        ball.ballDraw();
        return;
    }
    
    if (launchMeatMode) {
        kitchenStuff();
        ball.meatDraw();
        return;
    }
    
    if (launchPlantMode) {
        kitchenStuff();
        ball.plantDraw();
        return;
    }
    
    if (isDrivingMode) {
        drawTracks();
        playerCar.draw();

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
        ball.ballMove();
        return;
    }
    if (isDrivingMode) {
        return;
    }
    if (launchMeatMode) {
        ball.ballMove();
        return;
    }
    if (launchPlantMode) {
        ball.ballMove();
        return;
    }
}

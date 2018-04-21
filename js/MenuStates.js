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
    colorText("How To Play", canvas.width/2, 100, "white", "30px Arial", "center", 1);
    colorText("Movement: W, A, D", 150, 150, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen: SPACE, then in Kitchen Mode stop and wait for Q or E to be pressed", 150, 200, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen and Launch Meat: Q", 150, 250, "white", "16px Arial", "left", 1);
    colorText("Switch to Kitchen and Launch Plant: E", 150, 300, "white", "16px Arial", "left", 1);
    colorText("Gather Ingredient: SPACE", 150, 350, "white", "16px Arial", "left", 1);
    colorText("Kitchen Mode:", 150, 400, "white", "16px Arial", "left", 1);
    colorText("Movement: A, D", 150, 450, "white", "16px Arial", "left", 1);
    colorText("Switch to Vehicle: SPACE", 150, 500, "white", "16px Arial", "left", 1);
    colorText("Press  [SPACE]  To Return To Menu Or  [P]  to Play", canvas.width/2, 550, "white", "16px Arial", "center", 1);
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
        drawKitchenBG();
        paddle1Draw();
        paddle2Draw();
        drawNet();
        ballDraw();
        return;
    }
    if (isDrivingMode) {
        drawTracks();
	   //drawItems();
    }
}

function upadteGameStates() {
     if (mainMenuState) {
        return;
    }
    if (helpState) {
        return;
    }
    if (isKitchenMode) {
        ballMove();
        return;
    }
    if (isDrivingMode) {
        return;
    }
}

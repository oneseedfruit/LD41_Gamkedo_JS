var launchMeatMode = false;
var launchPlantMode = false;

var cookingThickness = 15;

var ball = new Ball(document.getElementById('gameCanvas'));

function kitchenStuff() {
    //kitchen bg
    /*colorRect(0, 0, canvas.width, canvas.height, "lightgrey");*/
    canvasContext.drawImage(kitchenPic, 0, 0)

    fuelMeterSprite.render(canvas.width/2 - (fuelMeterSprite.width/9)/2,15);

    //paddle 1
    //colorRect(paddle1X, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
    canvasContext.drawImage(panPaddle, paddle1X, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT)

    //paddle 2
    colorRect(paddle2X, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");

    //laser / net / fire / what?
    colorRect(0, canvas.height/2, canvas.width, 2, "red");
}

/*function drawFullnessLevel() {
    if (!mainMenuState && !helpState && !gameOverState) {
        colorText('Satisfaction: ' + fullnessLevel, 150, 50, 'white', "16px Arial", "center", 1);   
    }
}*/
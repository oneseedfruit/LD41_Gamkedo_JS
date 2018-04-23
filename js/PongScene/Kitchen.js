var launchMeatMode = false;
var launchPlantMode = false;

var cookingThickness = 15;

var ball = new Ball(document.getElementById('gameCanvas'));

function kitchenStuff() {
    //kitchen bg
    canvasContext.drawImage(kitchenPic, 0, 0)

    //paddle 1
    colorRect(paddle1X, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");

    //paddle 2
    colorRect(paddle2X, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");

    meatAmountSprite.render(2,20);
   	vegAmountSprite.render(canvas.width-40,20);
}
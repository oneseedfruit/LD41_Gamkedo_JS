var launchMeatMode = false;
var launchPlantMode = false;

var ball = new Ball(document.getElementById('gameCanvas'));

function kitchenStuff() {
    //kitchen bg
    colorRect(0, 0, canvas.width, canvas.height, "black");

    //paddle 1
    colorRect(paddle1X, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");

    //paddle 2
    colorRect(paddle2X, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");

    //net
    for (i = 0; i < canvas.width; i += 30) {
         colorRect(i, canvas.height/2, 20, 2)
    }
}
var launchMeatMode = false;
var launchPlantMode = false;

var ball = new Ball(document.getElementById('gameCanvas'));

function kitchenStuff() {
    //kitchen bg
    colorRect(0, 0, canvas.width/2, canvas.height/2, "black");


    //paddle 1
    colorRect(paddle1X - PADDLE_THICKNESS/2, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");


    //paddle 2
    colorRect(paddle2X - PADDLE_THICKNESS/2, paddle2Y + PADDLE_DIST_FROM_EDGE - 10, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");


    //net
    var gap = 5;
    for (i = 0; i < canvas.width; i += 30) {
         colorRect(i, canvas.height/2, 20, 2)
    }
}
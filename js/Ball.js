var ballX = 75,
ballY = 75;

var ballSpeedX = 10,
ballSpeedY = 10;

function ballDraw() {
    colorCircle(ballX, ballY, 10, "white");
}

function ballMove() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

function ballReset() {
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}
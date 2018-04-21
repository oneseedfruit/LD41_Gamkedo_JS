var ballX = 75,
ballY = 75;

var ballSpeedX = 10,
ballSpeedY = 10;

function ballDraw() {
    colorCircle(ballX, ballY, 10, "white");
}

function meatDraw() {
    colorCircle(ballX, ballY, 10, "red");
}

function plantDraw() {
    colorCircle(ballX, ballY, 10, "green");
}

function ballMove() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if (ballY >= canvas.height || ballY <= 0) {
        ballReset();
    }
    if (ballX <= 0 || ballX >= canvas.width) {
        ballSpeedX *= -1;
    }
}

function ballReset() {
    ballX = 75;
    ballY = 75;
}
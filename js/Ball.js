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
    
    if (ballY >= canvas.height) {
        ballReset();
    }
}

function ballReset() {
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}
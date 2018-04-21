const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 20;
const PADDLE_DIST_FROM_EDGE = 60;

var paddle1X = 0,
    paddle1Y = 250;

var paddle2X = 20,
    paddle2Y = 250;

function drawKitchenBG() {
    colorRect(0, 0, canvas.width, canvas.height, "black");
}

function paddle1Draw() {
    colorRect(paddle1X + PADDLE_DIST_FROM_EDGE, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
}

function paddle2Draw() {
    colorRect((canvas.width - PADDLE_DIST_FROM_EDGE) - paddle2X, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
}

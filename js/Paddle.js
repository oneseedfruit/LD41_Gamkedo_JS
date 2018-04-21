const PADDLE_HEIGHT = 20;
const PADDLE_THICKNESS = 100;
const PADDLE_DIST_FROM_EDGE = 60;

var paddle1X = 400,
    paddle1Y = 250;

var paddle2X = 400,
    paddle2Y = 0;

function drawKitchenBG() {
    colorRect(0, 0, canvas.width/2, canvas.height/2, "black");
}

function paddle1Draw() {
    colorRect(paddle1X - PADDLE_THICKNESS/2, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
}

function paddle2Draw() {
    colorRect(paddle2X - PADDLE_THICKNESS/2, paddle2Y + PADDLE_DIST_FROM_EDGE - 10, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
}

function drawNet() {
    var gap = 5;
    for (i = 0; i < canvas.width; i += 30) {
         colorRect(i, canvas.height/2, 20, 2)
    }
}

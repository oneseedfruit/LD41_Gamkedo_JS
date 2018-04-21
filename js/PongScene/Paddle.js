const PADDLE_HEIGHT = 20;
const PADDLE_THICKNESS = 100;
const PADDLE_DIST_FROM_EDGE = 60;
const PADDLE_SPEED = 20;

var paddle1X = 400 - PADDLE_THICKNESS/2,
    paddle1Y = 600 - PADDLE_DIST_FROM_EDGE;

var paddle2X = 400,
    paddle2Y = 0;

function movePaddleAI() {
    var centreOfPaddle2Y = paddle2X + (PADDLE_THICKNESS / 2);
        if (centreOfPaddle2Y < ball.ballY - 35) {
            paddle2X += 6;
        } else if (centreOfPaddle2Y > ball.ballY + 35) {
                    paddle2X -= 6;
        }
}


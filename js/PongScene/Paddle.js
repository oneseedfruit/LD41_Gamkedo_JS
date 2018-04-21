const PADDLE_HEIGHT = 20;
const PADDLE_THICKNESS = 100;
const PADDLE_DIST_FROM_EDGE = 60;
const PADDLE_SPEED = 20;

var paddle1X = 400 - PADDLE_THICKNESS/2,
    paddle1Y = 600 - PADDLE_DIST_FROM_EDGE;

var paddle2X = 400 - PADDLE_THICKNESS/2,
    paddle2Y = 0 + PADDLE_DIST_FROM_EDGE;

function movePaddleAI() {
	var centreOfPaddle2X = paddle2X + (PADDLE_THICKNESS / 2);
    if (centreOfPaddle2X < ball.ballX - 35) {
		paddle2X += 6;
		if (paddle2X >= 790 - PADDLE_THICKNESS) {
        	paddle2X = 790 - PADDLE_THICKNESS;
    	}
    } else if (centreOfPaddle2X > ball.ballX + 35) {
        paddle2X -= 6;
        if (paddle2X <= 10) {
        	paddle2X = 10;
    	}
    }
}


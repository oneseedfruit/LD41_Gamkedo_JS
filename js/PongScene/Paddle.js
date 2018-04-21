const PADDLE_HEIGHT = 20;
const PADDLE_THICKNESS = 100;
const PADDLE_DIST_FROM_EDGE = 60;
const PADDLE_SPEED = 20;

var paddle1X = 400 - PADDLE_THICKNESS/2,
    paddle1Y = 600 - PADDLE_DIST_FROM_EDGE;

var paddle2X = 400 - PADDLE_THICKNESS/2,
    paddle2Y = 0 + PADDLE_DIST_FROM_EDGE;

function movePaddleAI() {
    var gotoX = ball.ballX; 
    if (this.ballSpeedX < 0) { 
            gotoX = (canvas.width / 2);
        } 
     var centreOfPaddle2X = paddle2X + (PADDLE_THICKNESS / 2);
    if (ball.ballY <= canvas.height/2) {
        if (centreOfPaddle2X < gotoX - 35) {
            paddle2X += PADDLE_SPEED;
        } else if (centreOfPaddle2X > gotoX + 35) {
            paddle2X -= PADDLE_SPEED;
        }     
    }
}


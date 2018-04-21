// Ball class constructor: 1 class per file, file name is "class name".js
function Ball(canvas) {
    this.ballX = 75;
    this.ballY = 75;
    
    this.ballSpeedX = 7;
    this.ballSpeedY = 7;
    
    this.ballDraw = function() {
        colorCircle(this.ballX, this.ballY, 10, "white");
    };
    
    this.meatDraw = function() {
        colorCircle(this.ballX, this.ballY, 10, "red");
    };
    
    this.plantDraw = function() {
        colorCircle(this.ballX, this.ballY, 10, "green");
    };
    
    this.ballMove = function() {
        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;
        
        if (this.ballY >= canvas.height || this.ballY <= 0) {
            this.ballReset();
        }
        
        if (this.ballX <= 0 || this.ballX >= canvas.width) {
            this.ballSpeedX *= -1;
        }

        if (this.ballY > paddle1Y && this.ballY < (paddle1Y + PADDLE_HEIGHT) 
        && this.ballX > paddle1X && this.ballX < paddle1X + PADDLE_THICKNESS) {
            var deltaX = this.ballX-(paddle1X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }

        if (this.ballY > paddle2Y && this.ballY < (paddle2Y + PADDLE_HEIGHT) 
        && this.ballX > paddle2X && this.ballX < paddle2X + PADDLE_THICKNESS) {
            var deltaX = this.ballX-(paddle2X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }
    }
    
    this.ballReset = function() {
        this.ballX = canvas.width/2;
        this.ballY = canvas.height/2;
        this.ballSpeedX = 5;
        this.ballSpeedY = 5;
    }
}
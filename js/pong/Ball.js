function Ball(canvas) {
    this.ballX = 75;
    this.ballY = 75;
    
    this.ballSpeedX = 10,
    this.ballSpeedY = 10;
    
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
    }
    
    this.ballReset = function() {
        this.ballX = 75;
        this.ballY = 75;
    }
}
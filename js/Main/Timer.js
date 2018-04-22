function TimerClass() {
    this.secondsRemaining = 20;
    this.timeTick = function () {
        this.secondsRemaining--;
    }

    this.setupTimer = function () {
        var t = this;
        if (isDrivingMode || isKitchenMode) {
              setInterval(function() {t.timeTick();}, 1000);   
        }
    }

    this.drawTimer = function () {
        if (!gameOverState && !mainMenuState && !helpState) {
            colorText('Hunger Timer: ' + this.secondsRemaining + ' seconds', 400, 50, 'white', "20px Arial", "center", 1);   
        }
    }
    this.alertMessage = function() {
        if (this.secondsRemaining == 10) {
             colorText("I'm hungry!!", canvas.width/2, canvas.height/2, "white", "20px Arial", "center", 1)   
        }
        if (this.secondsRemaining == 0) {
            gameOverState = true;
        }
    }
}

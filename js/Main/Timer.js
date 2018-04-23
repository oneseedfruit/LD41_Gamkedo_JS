/*function TimerClass() {
    this.secondsRemaining = 20;
    this.isRunning = false;
    this.timeTick = function () {
        this.secondsRemaining--;
    }

    this.setupTimer = function () {
        var t = this;
        this.isRunning = true;
        if (isDrivingMode || isKitchenMode) {
              countdownTimer = setInterval(function() {t.timeTick();}, 1000);   
        }
    }

    this.drawTimer = function () {
        if (!gameOverState && !mainMenuState && !helpState) {
            colorText('Hunger Timer: ' + this.secondsRemaining + ' seconds', 400, 50, 'white', "20px Arial", "center", 1);   
        }
    }
    this.alertMessage = function() {
            if (!mainMenuState && !gameOverState && !helpState) {
                 if (this.secondsRemaining == 10) {
                colorText("I'm hungry!!", canvas.width/2, canvas.height/2, "white", "20px Arial", "center", 1)   
        }   
            }
        if (this.secondsRemaining == 0) {
            if (isDrivingMode || isKitchenMode) {
                isKitchenMode = false;
                isDrivingMode = false;
                gameOverState = true;   
                clearInterval(countdownTimer);
                timer.isRunning = false;
                 if(DontCookMusic.isPlaying){
                    DontCookMusic.pauseSound();
                }
                    gameOverMusic.loopSong();
                
            }
        }
    }
}
*/
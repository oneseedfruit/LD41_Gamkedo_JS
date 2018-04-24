function resetGame() {
    gameOverMusic.pauseSound();
    playerCar.x = 75;
    playerCar.y = 75;
    fuelMeterSprite.reset();
    menuMusic.loopSong();
    gameOverState = false;
    winState = false;
    mainMenuState = true;
}
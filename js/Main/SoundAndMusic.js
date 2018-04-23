var audioFormat;

// var boomSound = new SoundOverlapsClass("./audio/boom");

var DontCookMusic = new backgroundMusicClass("./audio/Don'tCookAndDrive");
var menuMusic = new backgroundMusicClass("./audio/Mcgamkedomenu");
var gameOverMusic = new backgroundMusicClass("./audio/McgamkedoPause");

var currentBackgroundMusic;

// var soundVolume = document.getElementById('soundVolume').defaultValue;
// var musicVolume = document.getElementById('musicVolume').defaultValue;

var soundVolume = 1;
var musicVolume = 1;
function setFormat() {
    var audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioFormat = ".mp3";
    } else {
        audioFormat = ".ogg";
    }
}

function backgroundMusicClass(filenameWithPath) {

    let musicSound = null;

    this.loopSong = function() {
        setFormat(); // calling this to ensure that audioFormat is set before needed

        if (musicSound != null) {
            musicSound.pause();
            musicSound = null;
        }
        musicSound = new Audio(filenameWithPath + audioFormat);
        musicSound.volume = musicVolume;
        musicSound.loop = true;
        musicSound.play();
    }

    this.pauseSound = function() {
        if (musicSound != null) {
          musicSound.pause();
        }
    }

    this.isPlaying = function(){
        return !musicSound.paused;
    }

    this.startOrStopMusic = function() {
        if (musicSound.paused) {
            musicSound.play();
        } else {
            musicSound.pause();
        }
    }
}

function SoundOverlapsClass(filenameWithPath) {
    setFormat();

    var altSoundTurn = false;
    var mainSound = new Audio(filenameWithPath + audioFormat);
    var altSound = new Audio(filenameWithPath + audioFormat);

    this.play = function() {
        if (altSoundTurn) {
            altSound.currentTime = 0;
            altSound.volume = soundVolume;
            altSound.play();
        } else {
            mainSound.currentTime = 0;
            mainSound.volume = soundVolume;
            mainSound.play();
        }

        this.altSoundTurn = !this.altSoundTurn; //toggling between true and false
    }
}

function getRandomVolume(){
	var min = 0.3;
	var max = 0.6;
	var randomVolume = Math.random() * (max - min) + min;
	return randomVolume.toFixed(2);
}

function updateSoundMusicLevel(){
  soundVolume = document.getElementById('soundVolume').value;
  musicVolume = document.getElementById('musicVolume').value;
  menuMusic.pauseSound();
  menuMusic.loopSong();
}

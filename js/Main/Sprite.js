function sprite(options) {
    var that = {};
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = options.ticksPerFrame || 0;
    var numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.image = options.image;
    that.loop = options.loop;
    that.width = options.width;
    that.height = options.height;

    that.update = function() {
        tickCount++;
        if (tickCount > ticksPerFrame) {
            tickCount = 0;

            if (frameIndex < numberOfFrames - 1) {
                frameIndex++;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    }

  that.setFrameIndex = function(frameIndexUpdate) {
        frameIndex = frameIndexUpdate;
  }

  that.getFrameIndex = function() {
        return frameIndex;
  }
	
	that.reset = function() {
		tickCount = 0;
		frameIndex = 0;
	}

  that.render = function(x, y) {
        that.context.drawImage(that.image,
                               frameIndex * that.width / numberOfFrames,
                               0,
                               that.width / numberOfFrames,
                               that.height,
                               x,
                               y,
                               that.width / numberOfFrames,
                               that.height);
  }

  that.renderHippo = function(x, y, withAng) {
      canvasContext.save();
      canvasContext.translate(x, y);
      canvasContext.rotate(withAng);
      that.context.drawImage(that.image,
                             frameIndex * that.width / numberOfFrames,
                             0,
                             that.width / numberOfFrames,
                             that.height,
                             -(that.width / numberOfFrames)/1.79,
                             -that.height/1.79,
                             (that.width / numberOfFrames),
                             that.height);
      canvasContext.restore();
  }
    return that;
}
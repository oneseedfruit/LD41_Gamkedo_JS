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

    return that;
}
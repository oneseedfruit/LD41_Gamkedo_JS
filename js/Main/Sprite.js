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

    that.render = function(x, y, withAng) {
        canvasContext.save();
        canvasContext.translate(x /*+ that.width / 4*/, y /*+ that.height / 4*/);
        canvasContext.rotate(withAng);
        that.context.drawImage(that.image,
                               frameIndex * that.width / numberOfFrames,
                               0,
                               that.width / numberOfFrames,
                               that.height,
                               -that.width/4,
                               -that.height/4,
                               that.width / numberOfFrames,
                               that.height);
        canvasContext.restore();
    }
    return that;
}
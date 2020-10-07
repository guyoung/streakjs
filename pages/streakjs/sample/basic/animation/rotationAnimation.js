const streakjs = require('../../../../../lib/streakjs/streakjs.min');

var anim;

export function runDraw(layer) {
    var rect = new streakjs.shapes.Rect({
        x: layer.width / 2,
        y: layer.height / 2,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    layer.add(rect);

    layer.draw();

    var angularSpeed = 90;

    anim = new streakjs.Animation(function (frame) {
        var angleDiff = (frame.timeDiff * angularSpeed) / 1000;
        rect.rotate(angleDiff);
    }, layer);

    anim.start();
}

export function destroy() { 
    if (anim && anim.isRunning()) {        
        anim.stop();

        anim = null;
    }

    if (anim) {
        anim = null;
    }
}
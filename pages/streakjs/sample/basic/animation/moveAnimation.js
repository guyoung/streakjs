const streakjs = require('../../../../../lib/streakjs/streakjs.min');

var anim;

export function runDraw(layer) {
    var rect = new streakjs.shapes.Rect({
        x: 0,
        y: layer.height / 2,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    layer.add(rect);

    layer.draw();

    var amplitude = 100;
    var period = 2000;
    var centerX = layer.width / 2;

    anim = new streakjs.Animation(function (frame) {
        rect.x = 
            amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX;
       
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
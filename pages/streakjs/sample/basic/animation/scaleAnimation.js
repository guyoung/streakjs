const streakjs = require('../../../../../lib/streakjs/streakjs.min');

var anim;

export function runDraw(layer) {
    var regularPolygon = new streakjs.shapes.RegularPolygon({
        x: layer.width / 2,
        y: layer.height / 2,
        sides: 6,
        radius: 40,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    layer.add(regularPolygon);

    layer.draw();

    var period = 2000;

    anim = new streakjs.Animation(function (frame) {
        var scale = Math.sin((frame.time * 2 * Math.PI) / period) + 0.001;
        regularPolygon.scale = { x: scale, y: scale };
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
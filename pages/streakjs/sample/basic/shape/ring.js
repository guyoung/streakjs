const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var ring = new streakjs.shapes.Ring({
        x: layer.width / 2,
        y: layer.height / 2,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
    });


    layer.add(ring);

    layer.draw();

}
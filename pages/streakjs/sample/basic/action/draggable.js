const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var circle = new streakjs.shapes.Circle({
        x: (layer.width - 60) / 2,
        y: (layer.height - 60) / 2,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    layer.add(circle);

    layer.draw();

}
const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

    var rect1 = new streakjs.shapes.Rect({
        x: (layer.width - 200) / 2,
        y: 25,
        width: 200,
        height: 100,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 5,
        cornerRadius: 10,       
    });

    var rect2 = new streakjs.shapes.Rect({
        x: (layer.width - 100) / 2,
        y: 50,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 5,
        cornerRadius: 10,
        globalCompositeOperation: 'destination-out'
    });


    layer.add(rect1);
    layer.add(rect2);

    layer.draw();
}
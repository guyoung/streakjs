const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var rect1 = new streakjs.shapes.Rect({
        x: 20,
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    var rect2 = new streakjs.shapes.Rect({
        x: 150,
        y: 40,
        width: 100,
        height: 50,
        fill: 'red',
        shadowBlur: 10,
        cornerRadius: 10
    });   

    var rect3 = new streakjs.shapes.Rect({
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: 'blue',
        cornerRadius: [0, 10, 20, 30]
    });

    layer.add(rect1);
    layer.add(rect2);
    layer.add(rect3);
    layer.draw();
   
}
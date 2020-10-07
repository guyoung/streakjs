const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {    

    var triangle = new streakjs.shapes.RegularPolygon({
        x: layer.width / 2,
        y: layer.height / 2,
        sides: 3,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 20,
        lineJoin: 'round'
    });

    layer.add(triangle);


    layer.draw();

}
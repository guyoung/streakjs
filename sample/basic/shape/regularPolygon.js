const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var regularPolygon = new streakjs.shapes.RegularPolygon({
        x: 100,
        y: 150,
        sides: 3,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });
    layer.add(regularPolygon);


    layer.draw();

}
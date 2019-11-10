const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var star = new streakjs.shapes.Star({
        x: layer.width / 2,
        y: layer.height / 2,
        numPoints: 6,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
      });



    layer.add(star);


    layer.draw();

}
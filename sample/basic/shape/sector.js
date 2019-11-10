const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var sector = new streakjs.shapes.Sector({
        x: layer.width / 2,
        y: layer.height / 2,
        radius: 70,
        angle: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,        
        rotation: -180
      });


    layer.add(sector);

    layer.draw();

}
const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var ellipse = new streakjs.shapes.Ellipse({
      x: layer.width /2,
      y: layer.height /2,
      radiusX: 100,
      radiusY: 50,
      fill: 'yellow',
      stroke: 'black',
      strokeWidth: 4
    });
  
    layer.add(ellipse);

    layer.draw();
   
}
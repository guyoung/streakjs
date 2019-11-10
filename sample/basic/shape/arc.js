const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var arc = new streakjs.shapes.Arc({
      x: layer.width / 2,
      y: layer.height / 2,
      innerRadius: 30,
      outerRadius: 60,
      angle: 60,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
  
    layer.add(arc);

    layer.draw();
   
}
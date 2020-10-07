const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var arrow = new streakjs.shapes.Arrow({
      x: 50,
      y: 50,
      points: [0, 0, layer.width / 2, layer.height / 2],
      pointerLength: 20,
      pointerWidth: 20,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
  
    layer.add(arrow);

    layer.draw();
   
}
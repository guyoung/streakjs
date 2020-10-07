const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var polygon = new streakjs.shapes.Polygon({
        x: 0,
        y: 0,        
        points: [150, 0, 75, 150, 225, 150],
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1
      });
  
      layer.add(polygon);

    layer.draw();
   
}
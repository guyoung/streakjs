const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

    var line1 = new streakjs.shapes.Line({
        points: [20, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'red',
        strokeWidth: 15,
      
    });

    var line2 = new streakjs.shapes.Line({
        points: [20, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'green',
        strokeWidth: 15,
        dash: [15, 5]      
    });


    var line3 = new streakjs.shapes.Line({
        points: [20, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'blue',
        strokeWidth: 15,
        dash: [30, 10] 
      
    });
    
    line2.move({
        x: 0,
        y: 100
    });

    line3.move({
        x: 0,
        y: 200
    });

    layer.add(line1);
    layer.add(line2);
    layer.add(line3);


    layer.draw();

}
const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

    var redLine = new streakjs.shapes.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'red',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var greenLine = new streakjs.shapes.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        dash: [33, 10]
    });

    var blueLine = new streakjs.shapes.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'blue',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        dash: [29, 20, 0.001, 20]
    });

    var blob = new streakjs.shapes.Line({
        points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
        tension: 0.3
    });

    layer.add(blob);

    redLine.move({
        x: 5,
        y: 150
    });

    greenLine.move({
        x: 5,
        y: 175
    });

    blueLine.move({
        x: 5,
        y: 200
    });

    layer.add(redLine);
    layer.add(greenLine);
    layer.add(blueLine);
    layer.add(blob);



    layer.draw();

}
const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var triangle = new streakjs.Shape({
        sceneFunc: function (context, shape) {
            context.beginPath();
            context.moveTo(20, 50);
            context.lineTo(220, 80);
            context.quadraticCurveTo(150, 100, 260, 170);
            context.closePath();
            context.fillStrokeShape(shape);
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
    });


    layer.add(triangle);

    layer.draw();

}
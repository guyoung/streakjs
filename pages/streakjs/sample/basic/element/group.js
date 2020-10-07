const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var group = new streakjs.Group({
        draggable: true
    });

    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    for (var i = 0; i < 6; i++) {
        var box = new streakjs.shapes.Rect({
            x: i * 30 + 10,
            y: i * 18 + 40,
            width: 100,
            height: 50,
            name: colors[i],
            fill: colors[i],
            stroke: 'black',
            strokeWidth: 4
        });
        group.add(box);

        layer.add(group);

        layer.draw();
    }

}
const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

    var animations = {
        idle: [
            2, 2, 70, 119,
            71, 2, 74, 119,
            146, 2, 81, 119,
            226, 2, 76, 119
        ],
        punch: [
            2, 138, 74, 122,
            76, 138, 84, 122,
            346, 138, 120, 122
        ]
    };

    streakjs.loader.loadImage('../../images/sprite.png', (res) => {
        var sprite = new streakjs.shapes.Sprite({
            x: 50,
            y: 50,
            image: res,
            animation: 'idle',
            animations: animations,
            frameRate: 7,
            frameIndex: 0
        });

        layer.add(sprite);

        layer.draw();

        sprite.start();
    });
}
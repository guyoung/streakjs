const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    streakjs.loader.loadImage('../../images/img-1.png', (res) => {
        var img = new streakjs.shapes.Image({
            x: 50,
            y: 50,
            image: res,
            width: 200,
            height: 150,
        });


        layer.add(img);
        layer.draw();
    });
}
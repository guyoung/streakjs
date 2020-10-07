const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var textpath = new streakjs.shapes.TextPath({
        x: 10,
        y: 100,
        fill: '#333',
        fontSize: 16,        
        text:
            "多端JavaScript Canvas框架streakjs",
        data: 'M10,10 C0,0 10,150 100,100 S300,150 4.0.140'
    });


    layer.add(textpath);


    layer.draw();

}
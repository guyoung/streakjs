const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

 
    streakjs.loader.loadImage('../images/bg-1.png', (res) => {

        var text = new streakjs.shapes.Text({
            x: (layer.width - 240) / 2,
            y: 100,
            text: "streakjs",
            fontSize: 32,
            fill: 'white',
            width: 240,
            padding: 20,
            align: 'center'
        });
    
        var rect = new streakjs.shapes.Rect({
            x: (layer.width - 240) / 2,
            y: 100,
            width: 240,
            height: 80,
            fillPatternImage: res,
            fillPatternOffset: { x: -220, y: 70 },
        });
    
        layer.add(rect);
        layer.add(text);
    
    
        layer.draw();

       

    });

}
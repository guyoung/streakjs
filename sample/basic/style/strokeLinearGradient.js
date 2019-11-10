const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {    

    var text = new streakjs.shapes.Text({
        x: (layer.width - 240) / 2,
        y: 100,
        text:"streakjs",
        fontSize: 32,        
        fill: '#555',
        width: 240,
        padding: 20,
        align: 'center'
    });

    var rect = new streakjs.shapes.Rect({
        x: (layer.width - 240) / 2,
        y: 100,       
        fill: '#ddd',
        width: 240,
        height: 80,      
        strokeWidth: 10,        
        strokeLinearGradientStartPoint: { x: 0, y: 0 },
        strokeLinearGradientEndPoint: { x: 240, y: 80 },
        strokeLinearGradientColorStops: [0, 'blue', 1, 'green']      
    });
    
    layer.add(rect);
    layer.add(text);


    layer.draw();

}
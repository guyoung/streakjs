const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var simpleText = new streakjs.shapes.Text({
        x: layer.width / 2,
        y: 15,
        text: 'streakjs',
        fontSize: 30,        
        fill: 'green'
    });


    simpleText.offsetX = simpleText.width / 2;


    var complexText = new streakjs.shapes.Text({
        x: 10,
        y: 100,
        text:
            "streakjs\n\多端JavaScript Canvas框架streakjs",
        fontSize: 18,        
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center'
    });

    var rect = new streakjs.shapes.Rect({
        x: 10,
        y: 100,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 300,
        height: complexText.height,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: [10, 10],
        shadowOpacity: 0.2,
        cornerRadius: 10
    });

    layer.add(simpleText);
    layer.add(rect);
    layer.add(complexText);


    layer.draw();

}
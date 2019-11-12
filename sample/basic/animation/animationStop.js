const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var rect = new streakjs.shapes.Rect({
        x: 0,
        y: layer.height / 2,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    layer.add(rect);

    layer.draw();

    var amplitude = 100;
    var period = 2000;
    var centerX = layer.width / 2;

    var anim = new streakjs.Animation(function (frame) {
        rect.x = 
            amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX;
        
    }, layer);

    

    var text1 = new streakjs.shapes.Text({
        x: 50,
        y: layer.height - 50,
        text: '开始',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })

    text1.on('tap', function (e) {
        anim.start(); 
    });


    var text2 = new streakjs.shapes.Text({
        x: 150,
        y: layer.height - 50,
        text: '停止',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })

    text2.on('tap', function (e) {
        anim.stop();        
        
    });

    layer.add(text1);
    layer.add(text2);
    layer.draw();

    anim.start();

   
}
const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var circle = new streakjs.shapes.Circle({
        x: 100,
        y: 150,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    circle.on('touchstart.evt1', function (e) {
        writeMessage('circle touchstart.evt1');
    });  

    circle.on('touchstart.evt2', function (e) {
        writeMessage('circle touchstart.evt2');
    });  

    circle.on('touchend', function (e) {
        writeMessage('circle touchend');
    });  


    var rect = new streakjs.shapes.Rect({
        x: 50,
        y: 250,
        width: 120,
        height: 80,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4       
    });


    rect.on('touchstart', function (e) {
        writeMessage('rect touchstart');
    });

    rect.on('touchend', function (e) {
        writeMessage('rect touchend');
    });

 

    var text = new streakjs.shapes.Text({
        x: 10,
        y: 10,
        fontSize: 16,
        text: '',
    });

    layer.add(circle);
    layer.add(rect);
    layer.add(text);   

    layer.draw();

    circle.off('touchstart.evt2');
    rect.off('touchend');

    function writeMessage(message) {
        text.text = message;
        layer.draw();
    }
}
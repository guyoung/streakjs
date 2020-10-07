const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var circle = new streakjs.shapes.Circle({
        x: 100,
        y: 150,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    circle.on('dragstart', function (e) {
        writeMessage('circle dragstart');
    });  

    circle.on('dragmove', function (e) {
        writeMessage('circle dragmove');
    });  

    circle.on('dragend', function (e) {
        writeMessage('circle dragend');
    });  



    var text = new streakjs.shapes.Text({
        x: 10,
        y: 10,
        fontSize: 16,
        text: '',
    });

    layer.add(circle);
    layer.add(text);   

    layer.draw();

   

    function writeMessage(message) {
        text.text = message;
        layer.draw();
    }
}
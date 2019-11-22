const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {  

    var group = new streakjs.Group();

    var circle = new streakjs.shapes.Circle({
        x: 100,
        y: 150,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    circle.on('tap', function (e) {
        e.cancelBubble = true;
        writeMessage('Events: ' + e.type+' Target: '+e.currentTarget.className);
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


    rect.on('tap', function (e) {
        writeMessage('Events: ' + e.type+' Target: '+e.currentTarget.className);
    });

    group.add(circle)
    group.add(rect)

    group.on('tap', function () {
        writeMessage('You tap on the group!');
    });

   

    var text = new streakjs.shapes.Text({
        x: 10,
        y: 10,
        fontSize: 16,
        text: '',
    });


   
    layer.add(group);
    layer.add(text);

    layer.draw()

    function writeMessage(message) {
        text.text = message;
        layer.draw();
    }
    
}
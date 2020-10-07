const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var circle1 = new streakjs.shapes.Circle({
        x: layer.width / 2,
        y: 75,
        radius: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        id: 'circle1',
        name: 'circle1'
    });

    var circle2 = new streakjs.shapes.Circle({
        x: layer.width / 2,
        y: 200,
        radius: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        id: 'circle2',
        name: 'circle2'
        
    });

    var text1 = new streakjs.shapes.Text({
        x: 50,
        y: layer.height - 50,
        text: '移动',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })

    text1.on('tap', function (e) {
        var shape = layer.find('#circle1')[0];

        if (shape.x < layer.width) {
            shape.x++;
        } else {
            shape.x = 0;
        }

        layer.draw();           
        
    });


    var text2 = new streakjs.shapes.Text({
        x: 150,
        y: layer.height - 50,
        text: '移动',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })

    text2.on('tap', function (e) {
        var shape = layer.find('.circle2')[0];

        if (shape.x < layer.width) {
            shape.x++;
        } else {
            shape.x = 0;
        }

        layer.draw();           
        
    });

    var text3 = new streakjs.shapes.Text({
        x: 250,
        y: layer.height - 50,
        text: '移动',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })


    text3.on('tap', function (e) {
        var shapes = layer.find('Circle');

        shapes.forEach(shape => {
            if (shape.x < layer.width) {
                shape.x++;
            } else {
                shape.x = 0;
            }
    
        });
       
        layer.draw();           
        
    });


    layer.add(circle1);
    layer.add(circle2);
    layer.add(text1);
    layer.add(text2);
    layer.add(text3);


    layer.draw();

}
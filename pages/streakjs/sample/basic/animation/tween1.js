const streakjs = require('../../../../../lib/streakjs/streakjs.min');

var tween;

export function runDraw(layer) {
    var circle = new streakjs.shapes.Circle({
        x: layer.width / 2,
        y: layer.height / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
    });

    layer.add(circle);
    layer.draw();

  
    var tween = new streakjs.Tween({
        node: circle,
        duration: 1,
        x: layer.width / 2,
        y: layer.height / 2,
        radius: 30,
        fill: 'blue',
    });

  
    setTimeout(function () {
        tween.play();
    }, 2000);
   
}

export function destroy() { 
    if (tween) {        
        tween.destroy()
    }
}
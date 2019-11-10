const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {
    var tooltip = new streakjs.shapes.Label({
        x: 170,
        y: 75,
        opacity: 0.75
      });
  
      tooltip.add(
        new streakjs.shapes.Tag({
          fill: 'black',
          pointerDirection: 'down',
          pointerWidth: 10,
          pointerHeight: 10,
          lineJoin: 'round',
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffset: 10,
          shadowOpacity: 0.5
        })
      );
  
      tooltip.add(
        new streakjs.shapes.Text({
          text: 'streakjs',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white'
        })
      );
  
      // label with left pointer
      var labelLeft = new streakjs.shapes.Label({
        x: 20,
        y: 130,
        opacity: 0.75
      });
  
      labelLeft.add(
        new streakjs.shapes.Tag({
          fill: 'green',
          pointerDirection: 'left',
          pointerWidth: 20,
          pointerHeight: 28,
          lineJoin: 'round'
        })
      );
  
      labelLeft.add(
        new streakjs.shapes.Text({
          text: 'streakjs',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white'
        })
      );
  
      // simple label
      var simpleLabel = new streakjs.shapes.Label({
        x: 180,
        y: 150,
        opacity: 0.75
      });
  
      simpleLabel.add(
        new streakjs.shapes.Tag({
          fill: 'yellow'
        })
      );
  
      simpleLabel.add(
        new streakjs.shapes.Text({
          text: 'streakjs',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'black'
        })
      );
  
   
      layer
        .add(tooltip)
        .add(labelLeft)
        .add(simpleLabel);

    layer.draw();
   
}
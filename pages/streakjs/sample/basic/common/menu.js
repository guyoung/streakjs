const streakjs = require('../../../../../lib/streakjs/streakjs.min');

export function runDrawContentMenu(contents, layer) {
    var width = Math.round((layer.width - 40) / 2);
    var height = Math.round((layer.height - 40) / 10);
    var x;
    var y;

    for (var i = 0; i < contents.length; i++) {
        if (i % 2 === 0) {
            x = 10;
        } else {
            x = width + 20;
        }

        y = Math.floor(i / 2) * (height + 5);

        var button = new streakjs.shapes.Label({
            x: x,
            y: y,
            width: width,
            height: height
        });

        button.add(
            new streakjs.shapes.Tag({
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: width, y: height },
                fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
            })
        );

        button.add(
            new streakjs.shapes.Text({
                width: width,
                text: contents[i].title,
                fontSize: 20,
                padding: 5,
                align: 'center',
                verticalAlign: 'middle',
                fill: 'white',

            })
        );

        button.__PATH = contents[i].path;


        button.on('tap', function (e) {
            if (e.currentTarget && e.currentTarget.__PATH) {
                wx.navigateTo({
                    url: '../basic/basic?path=' + e.currentTarget.__PATH
                });
            }

        });


        layer.add(button);
        layer.draw();
    }
}
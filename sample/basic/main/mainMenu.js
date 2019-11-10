const streakjs = require('../../../lib/streakjs/streakjs.min');

function getCatalogs() {
    return [{
        title: '图形',
        path: 'shape/shapeMenu'
    }, {
        title: '样式',
        path: 'style/styleMenu'
    }, {
        title: '属性',
        path: 'property/propertyMenu'
    }, {
        title: '操作',
        path: 'action/actionMenu'
    }, {
        title: '事件',
        path: 'event/eventMenu'
    }, {
        title: '动画',
        path: 'animation/animationMenu'
    }, {
        title: '杂项',
        path: 'misc/miscMenu'
    }]
}


export function runDraw(layer) {
    var width = layer.width - 40;
    var height = Math.round((layer.height - 40) / 10);
    var x;
    var y;
    var catalogs = getCatalogs();

    for (var i = 0; i < catalogs.length; i++) {

        x = 10;
        y = i * (height + 5);

        var label = new streakjs.shapes.Label({
            x: x,
            y: y,
            width: width,
            height: height
        });

        label.add(
            new streakjs.shapes.Tag({
                fillRadialGradientStartPoint: { x: width / 2, y: height / 2 },
                fillRadialGradientStartRadius: height / 2,
                fillRadialGradientEndPoint: { x: width / 2, y: height / 2 },
                fillRadialGradientEndRadius: width / 2,
                fillRadialGradientColorStops: [0, '#ee6142', 1, '#fef2d8'],
            })
        );

        label.add(
            new streakjs.shapes.Text({
                width: width,
                text: catalogs[i].title,
                fontSize: 24,
                padding: 5,
                align: 'center',
                verticalAlign: 'middle',
                fill: 'white',
                shadowColor: 'black',
                shadowBlur: 0,
                shadowOffset: { x: 2, y: 5 },
                shadowOpacity: 0.5
            })
        );

        label.__PATH = catalogs[i].path;

        label.on('tap', function (e) {
            wx.navigateTo({
                url: '../basic/basic?path='+e.currentTarget.__PATH
            })
        });


        layer.add(label);
        layer.draw();
    }
}
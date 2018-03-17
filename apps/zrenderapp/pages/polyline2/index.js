//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        //console.log('onReady');
        var that = this;

        zr = zrhelper.createZrender('canvas-1', 360, 720);

        var x1 = Math.random() * 2;
        var y1 = Math.random() * 600;
        var cpx1 = Math.random() * 375;
        var cpy1 = Math.random() * 600;
        var x2 = Math.random() * 375;
        var y2 = Math.random() * 600;
        for (var i = 0; i < 10000; i++) {
            x1 += (Math.random() - 0.5) * 10;
            y1 += (Math.random() - 0.5) * 10;
            cpx1 += (Math.random() - 0.5) * 10;
            cpy1 += (Math.random() - 0.5) * 10;
            x2 += (Math.random() - 0.5) * 10;
            y2 += (Math.random() - 0.5) * 10;
            var checkpoint = !(i % 2000);
            var checkpointIdx = Math.round(i / 2000);

            var color = 'rgb(' + [
                        Math.round(255 * checkpointIdx / 5),
                        Math.round(255 * checkpointIdx / 5),
                        Math.round(255 * checkpointIdx / 5)
                    ].join(',') + ')';

          
            zr.add(new zrender.BezierCurve({
                shape: {
                    x1: x1,
                    y1: y1,
                    cpx1: cpx1,
                    cpy1: cpy1,
                    x2: x2,
                    y2: y2
                },
                style: {
                    lineWidth: 0.5,
                    opacity: 0.1,     
                    stroke: color
                },
                 progressive: checkpoint ? -1 : Math.floor(i / 1000)
            }));

        }

    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
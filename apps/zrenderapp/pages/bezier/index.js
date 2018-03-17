//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';


//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = zrhelper.createZrender('canvas-1', 360, 720);


        var curve1 = new zrender.BezierCurve({
            shape: {
                x1: 100,
                y1: 200,
                cpx1: 0,
                cpy1: 0,
                cpx2: 0,
                cpy2: 0,
                x2: 200,
                y2: 100
            },
            style: {
                lineWidth: 6,
                stroke: 'blue'
            }
        });

        zr.add(curve1);

        curve1.animateTo({
            shape: {
                percent: 0
            }
        });

        var curve2 = new zrender.BezierCurve({            
            shape: {
                x1: 100, y1: 100,
                x2: 100, y2: 500,
                x3: 500, y3: 100,
                x4: 500, y4: 500
            },
            style: {
                lineWidth: 3,
                stroke: 'yellow',
                lineDash: [5, 5],
                lineDashOffset: 0
            },
        });

        zr.add(curve2);

        curve2.animate('style', true)
            .when(1000, {
                lineDashOffset: -10
            })
            .start();
    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
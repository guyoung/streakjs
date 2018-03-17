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

        var polygon = new zrender.Polygon({
            shape: {
                points: [[50, 150], [230, 220], [200, 240], [150, 250], [120, 70]],
                smooth: 0.5
            },
            style: {
                // smoothConstraint: [[-Infinity, -Infinity], [200, Infinity]],
                fill: 'rgba(220, 20, 60, 0.4)',
                stroke: "rgba(220, 20, 60, 1)",
                lineWidth: 2
            }
        });

        zr.add(polygon);

        polygon.animateStyle(true)
            .when(2000, {
                fill: 'rgba(222, 222, 10, 1)'
            })
            .start();
    },

    onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }        
    }
});
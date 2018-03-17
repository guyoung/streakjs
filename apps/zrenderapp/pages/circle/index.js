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

        var gradient = new zrender.LinearGradient();
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'black');

        var circle = new zrender.Circle({           
            shape: {
                cx: 50,
                cy: 50,
                r: 50
            },
            style: {
                fill: gradient,
                lineWidth: 10
            }
        });
        zr.add(circle);

        circle.animate('shape')
            .when(200, {
                cx: 250
            })
            .start();
            
        circle.animate('shape', true)
            .when(1000, {
                cx: 250
            })
            .when(2000, {
                cx: 250,
                cy: 250
            })
            .when(3000, {
                cx: 50,
                cy: 250
            })
            .when(4000, {
                cx: 150,
                cy: 150
            })
            .start();
    },
    onUnload: function () {
		if (zr)  {
            zr.dispose();
        } 
    }
});
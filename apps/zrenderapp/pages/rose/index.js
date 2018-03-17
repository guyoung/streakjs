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

        var rose = new zrender.Rose({
            shape: {
                cx: 200,
                cy: 200,
                r: [30],
                k: 7,
                n: 4
            },
            style: {
                lineWidth: 1,
                stroke: '#ff0000',
                shadowBlur: 10,
                shadowOffsetX: 50,
                shadowOffsetY: 50,
                shadowColor: 'blue'
            }
        });
        zr.add(rose);

        rose.animate('shape', true)
            .when(2000, {
                r: [150],
            })
            .start();


    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
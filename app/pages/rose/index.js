//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("rose-canvas-1", 375, 600);

        var rose = new wezrender.graphic.shape.Rose({
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
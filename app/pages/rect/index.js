//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("rect-canvas-1", 375, 600);

        var n = 50;
        var width = 300;
        var height = 400;

        for (var i = 1; i <= n; i++) {
            var h = height * Math.random();
            var barShape = new wezrender.graphic.shape.Rect({
                shape: {
                    x: i * width / n,
                    y: height,
                    width: width / n,
                    height: 0
                },
                style: {
                    fill: 'rgb(0, 0, 180)'
                }
            });
            zr.add(barShape);

            barShape.animateTo({
                shape: {
                    height: h,
                    y: height - h
                }
            }, 500);
        }

    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
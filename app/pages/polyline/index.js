//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;


Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("polyline-canvas-1", 375, 600);      

          var points = [];
            for (var i = 0; i < 10; i++) {
                points.push([Math.random() * 250 + 50, Math.random() * 250 + 30]);
            }

            var polyline = new wezrender.graphic.shape.Polyline({
                style: {
                    lineDash: [10, 10],
                    stroke: "rgba(220, 20, 60, 0.8)",
                    lineWidth: 10
                },
                shape: {
                    points: points,
                    smooth: 0.5
                }
            });

            zr.add(polyline);

            polyline.animate('style', true)
                .when(1000, {
                    lineDashOffset: 20
                })
                .start();
     

    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }

       
    }
});
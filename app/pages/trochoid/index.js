//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("trochoid-canvas-1", 375, 600);


        for (var i = 0; i < 10; i++) {
            var trochoid = new wezrender.graphic.shape.Trochoid({
                shape: {
                    cx: 200,
                    cy: 200,
                    r: 30,
                    r0: 25,
                    d: 30                    
                },
                style: {
                    lineWidth: 1,
                    stroke: '#ffff00'
                }
            });

            zr.add(trochoid);
            var animator = trochoid.animate('shape', true);

            for (var j = 1; j < 10; j++) {

                animator.when(j * 1000, {
                    cx: Math.random() * 375,
                    cy: Math.random() * 600
                });

            }

            animator.start('spline');
        }


    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
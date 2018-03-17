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


        for (var i = 0; i < 10; i++) {
            var trochoid = new zrender.Trochoid({
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
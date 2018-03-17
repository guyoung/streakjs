//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

//获取应用实例
var app = getApp();

var zr

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = zrhelper.createZrender('canvas-1', 360, 720);

        var n = 50;
        var width = 300;
        var height = 400;

        for (var i = 1; i <= n; i++) {
            var h = height * Math.random();
            var barShape = new zrender.Rect({
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
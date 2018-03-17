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

        wx.getSystemInfo({
            success: function (res) {
                zr = zrhelper.createZrender('canvas-1', res.windowWidth, res.windowHeight);

                var w = zr.getWidth();
                var h = zr.getHeight();

                var circle = new zrender.Circle({
                    shape: {
                        cx: w / 2,
                        cy: h / 2,
                        r: 50
                    },
                    style: {
                        fill: '#FF6EBE'
                    },
                    draggable: true
                });

                var heart = new zrender.Heart({
                    shape: {
                        cx: w / 2 + 20,
                        cy: h / 2 - 40,
                        width: 60,
                        height: 80
                    },
                    draggable: true
                });

                circle.setClipPath(heart);
                zr.add(circle);

                var borderA = new zrender.Circle({
                    shape: {
                        cx: w / 2,
                        cy: h / 2,
                        r: 50
                    },
                    style: {
                        fill: 'transparent',
                        stroke: '#5ACFFF'
                    }
                });
                zr.add(borderA);

                var borderB = new zrender.Heart({
                    shape: {
                        cx: w / 2 + 20,
                        cy: h / 2 - 40,
                        width: 60,
                        height: 80
                    },
                    style: {
                        fill: 'transparent',
                        stroke: '#5ACFFF'
                    }
                });

                zr.add(borderB);
            }
        });
    },
    onUnload: function () {

    }
});
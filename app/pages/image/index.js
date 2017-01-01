//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        /*
        var ctx = wx.createCanvasContext('image-canvas-1');
        ctx.drawImage('../../images/koala.jpg', 0, 0, 320, 240);
        ctx.draw();       
        */

        zr = wezrender.zrender.init("image-canvas-1", 375, 600);

        var image = new wezrender.graphic.Image({
            style: {
                x: 0,
                y: 0,
                image: '../../images/koala.jpg',
                width: 32,
                height: 24,
                text: 'koala'
            }
        });
        zr.add(image);

        image.animateStyle(true)
            .when(2000, {
                x: 350,
                y: 450,
                width: 360,
                height: 270,
            })
            .start();

    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
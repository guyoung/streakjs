//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("droplet-canvas-1", 375, 600);

        var droplet = new wezrender.graphic.shape.Droplet({
            shape: {
                cx: 200,
                cy: 300,
                width: 50,
                height: 50
            },
            style: {
                fill: '#ff9999'
            }
        });
        zr.add(droplet);

        droplet.animateShape(true)
            .when(1000, {
                width: 100,
                height: 100
            })
            .start();
    },

    onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }        
    }
});
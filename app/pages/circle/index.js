//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("circle-canvas-1", 375, 600);

        var gradient = new wezrender.graphic.LinearGradient();
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'black');

        var circle = new wezrender.graphic.shape.Circle({           
            shape: {
                cx: 50,
                cy: 50,
                r: 50
            },
            style: {
                fill: gradient,
                lineWidth: 10
            }
        });
        zr.add(circle);

        circle.animate('shape')
            .when(200, {
                cx: 250
            })
            .start();
            
        circle.animate('shape', true)
            .when(1000, {
                cx: 250
            })
            .when(2000, {
                cx: 250,
                cy: 250
            })
            .when(3000, {
                cx: 50,
                cy: 250
            })
            .when(4000, {
                cx: 150,
                cy: 150
            })
            .start();
    },
     onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }
    }
});
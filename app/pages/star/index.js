//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("star-canvas-1", 375, 600);
        var star = new wezrender.graphic.shape.Star({ 
            shape: {
                n: 5,
                cx: 180,
                cy: 240,
                r: 100,
            },
            style: {
                lineWidth: 5,
                lineDash: [5, 5],
                stroke: 'green',
                text: 'star'
            }
        });
        zr.add(star);

        
        star.animate('style', true)
            .when(1000, {
                lineDashOffset: -5
            })
            .start();      
    },

    onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }        
    }
});
//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("text-canvas-1", 375, 600);

        var text = new wezrender.graphic.Text({
            style: {
                x: -50,
                y: -50,
                text: '元旦快乐Happy New Year\n元旦快乐Happy New Year\n元旦快乐Happy New Year\n元旦快乐Happy New Year',
                width: 300,
                height: 300,
                fill: '#cc00ff',
                textFont: '24px Microsoft Yahei',
                textBaseline: 'top'
            }
        });
        zr.add(text);

        text.animateStyle(true)
            .when(3000, {
                x: 350,
                y: 450,
            })
            .start();

    },

    onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }        
    }
});
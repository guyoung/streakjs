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

        var text = new zrender.Text({
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
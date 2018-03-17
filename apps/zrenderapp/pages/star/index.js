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

        var star = new zrender.Star({ 
            shape: {
                n: 5,
                cx: 180,
                cy: 240,
                r: 100,
            },
            style: {
                lineWidth: 5,
                lineDash: [5, 5],
                fill: 'red',
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
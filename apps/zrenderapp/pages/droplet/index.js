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

        var droplet = new zrender.Droplet({
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
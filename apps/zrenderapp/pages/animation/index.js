//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

//获取应用实例
var app = getApp();

var zr;
var interval;

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        zr = zrhelper.createZrender('canvas-1', 360, 720);

        var polygon = new zrender.Polygon({
            shape: {

            },
            style: {
                fill: 'red'
            }
        });

        interval = setInterval(function () { 
            var len = Math.round(Math.random() * 100);
            var points = [];
            var r = (Math.random() * 100);
            for (var i = 0; i <= len; i++) {
                var phi = i / len * Math.PI * 5;
                var x = Math.cos(phi) * r + 180;
                var y = Math.sin(phi) * r + 240;
                points.push([x, y]);
            }
            polygon.animateTo({
                shape: {
                    points: points
                }
            }, 500, 'cubicOut');
        }, 1000);
        zr.add(polygon);
    },

    onUnload:function(){  
        if (zr)  {
            zr.dispose();
        }
        
        if (interval) {
            clearInterval(interval);
        }
    }
});
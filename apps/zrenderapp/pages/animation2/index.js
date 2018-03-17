//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

//获取应用实例
var app = getApp();

var zr;


Page({

    onReady: function () {
        //console.log('onReady');
        var that = this;

        zr = zrhelper.createZrender('canvas-1', 360, 720);

        var w = 375;
        var h = 600;
        var easings = [
            'Linear', 'QuadraticIn', 'QuadraticOut', 'QuadraticInOut',
            'CubicIn', 'CubicOut', 'CubicInOut', 'QuarticIn', 'QuarticOut',
            'QuarticInOut', 'QuinticIn', 'QuinticOut', 'QuinticInOut', 'SinusoidalIn',
            'SinusoidalOut', 'SinusoidalInOut', 'ExponentialIn', 'ExponentialOut',
            'ExponentialInOut', 'CircularIn', 'CircularOut', 'CircularInOut',
            'ElasticIn', 'ElasticOut', 'ElasticInOut', 'BackIn', 'BackOut',
            'BackInOut', 'BounceIn', 'BounceOut', 'BounceInOut'
        ]

        var gradient = new zrender.LinearGradient();
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'yellow');

        var arc = new zrender.Arc({
            shape: {
                cx: random(w) * 0.5,
                cy: random(h) * 0.5,
                r: 80,
                startAngle: 0.5,
                endAngle: 4.5
            },
            style: {
                lineWidth: 5,
                stroke: 'red',
                fill: gradient
            }
        });

        zr.add(arc);
        animate(arc);

        var ellipse = new zrender.Ellipse({
            shape: {
                cx: random(w) * 0.5,
                cy: random(h) * 0.5,
                rx: 120,
                ry: 60
            },
            style: {
                lineWidth: 5,
                fill: gradient
            }
        });

        zr.add(ellipse);
        animate(ellipse);

        var heart = new zrender.Heart({
            shape: {
                cx: random(w) * 0.5,
                cy: random(h) * 0.5,
                width: 80,
                height: 80
            },
            style: {
                lineWidth: 5,
                fill: gradient
            }
        });

        zr.add(heart);
        animate(heart);

        var isogon = new zrender.Isogon({
            shape: {
                x: random(w) * 0.5,
                y: random(h) * 0.5,
                r: 60,
                n: 8
            },
            style: {
                lineWidth: 5,
                fill: gradient
            }
        });

        zr.add(isogon);
        animate(isogon);

        var ring = new zrender.Ring({
            shape: {
                cx: random(w) * 0.5,
                cy: random(w) * 0.5,
                r: 80,
                r0: 60
            },
            style: {
                lineWidth: 5,
                fill: gradient
            }
        });

        zr.add(ring);
        animate(ring);

        var sector = new zrender.Sector({
            shape: {
                cx: random(w) * 0.5,
                cy: random(w) * 0.5,
                r: 120,
                r0: 90,
                startAngle: 0,
                endAngle: 2
            },
            style: {
                lineWidth: 5,
                fill: gradient
            }
        });

        zr.add(sector);
        animate(sector);


        function animate(shape) {
            shape.animate('shape', true).when(random(500, 3000), {
                cx: random(w),
                cy: random(h),
                x: random(w),
                y: random(h)
            }).start(easings[random(30)]);
        }

        function random(max, min) {
            var min = min || 0;
            return Math.floor(Math.random() * (max - min)) % (max - min) + min;
        }
    },

    onUnload: function () {
        if (zr) {
            zr.dispose();
        }
    }
});
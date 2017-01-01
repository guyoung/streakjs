//index.js
var wezrender = require('../../lib/wezrender');

//获取应用实例
var app = getApp();

var zr;


Page({

    onReady: function () {
        //console.log('onReady');
        var that = this;

        zr = wezrender.zrender.init("animation2-canvas-1", 375, 600);

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

        var gradient = new wezrender.graphic.LinearGradient();
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'yellow');

        var arc = new wezrender.graphic.shape.Arc({
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

        var ellipse = new wezrender.graphic.shape.Ellipse({
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

        var heart = new wezrender.graphic.shape.Heart({
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

        var isogon = new wezrender.graphic.shape.Isogon({
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

        var ring = new wezrender.graphic.shape.Ring({
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

        var sector = new wezrender.graphic.shape.Sector({
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
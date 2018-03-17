//index.js
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

//获取应用实例
var app = getApp();

Page({

    onReady: function () {
        // console.log('onLoad');
        var that = this;

        var zr = zrhelper.createZrender('canvas-1', 360, 720);

        var Pin = zrender.Path.extend({
            type: 'pin',
            shape: {
                // x, y on the cusp
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function (path, shape) {
                var x = shape.x;
                var y = shape.y;
                var w = shape.width / 5 * 3;
                // Height must be larger than width
                var h = Math.max(w, shape.height);
                var r = w / 2;

                // Dist on y with tangent point and circle center
                var dy = r * r / (h - r);
                var cy = y - h + r + dy;
                var angle = Math.asin(dy / r);
                // Dist on x with tangent point and circle center
                var dx = Math.cos(angle) * r;

                var tanX = Math.sin(angle);
                var tanY = Math.cos(angle);

                path.arc(
                    x, cy, r,
                    Math.PI - angle,
                    Math.PI * 2 + angle
                );

                var cpLen = r * 0.6;
                var cpLen2 = r * 0.7;
                path.bezierCurveTo(
                    x + dx - tanX * cpLen, cy + dy + tanY * cpLen,
                    x, y - cpLen2,
                    x, y
                );
                path.bezierCurveTo(
                    x, y - cpLen2,
                    x - dx + tanX * cpLen, cy + dy + tanY * cpLen,
                    x - dx, cy + dy
                );
                path.closePath();
            }
        });

        var pin = new Pin({
            shape: {
                x: 120,
                y: 160,
                width: 30,
                height: 80
            },
            scale: [2, 2]
        });
        zr.add(pin);

    }
});
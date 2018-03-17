微信小程序Canvas开发-使用Zrender
==================================


![ZRender Demo App](https://mmbiz.qpic.cn/mmbiz_gif/5IMiaY073fa5oTCnKV6ibibWLaCfcApMdrY0mHPt1KkzQMIWJj2JVF7oVZWa3zA6gAOhHKZgHLNkPT2qltsiar3sVw/640?wx_fmt=gif)

[ZRender](https://github.com/ecomfe/zrender) 是二维绘图引擎，它提供 Canvas、SVG、VML 等多种渲染方式。ZRender 也是 ECharts 的渲染器。


## 使用Zrender

WXML：

``` html
<view class="container">
    <canvas canvas-id="canvas-1"></canvas>
</view>
```

JS：

``` javascript
import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';

zr = zrhelper.createZrender('canvas-1', 360, 720);
```

## 特性

**数据驱动**

利用ZRender绘图，只需定义图形数据。

``` javascript
    var circle = new zrender.shape.Circle(      
        shape: {
            cx: 50,
            cy: 50,
            r: 50
        },
        style: {
            fill: 'red',
            lineWidth: 10
        }
    });
```

**丰富的图形选项**

内置多种图形元素（圆形、椭圆、圆环、扇形、矩形、多边形、直线、曲线、心形、水滴、玫瑰线、Trochoid、文字、图片等），统一且丰富的图形属性充分满足个性化需求。

``` javascript
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
```

**强大的动画支持**

提供promise式的动画接口和常用缓动函数，轻松实现各种动画需求。

``` javascript
    var image = new zrender.Image({
        style: {
            x: 0,
            y: 0,
            image: '../../images/koala.jpg',
            width: 32,
            height: 24,
            text: 'koala'
        }
    });
    zr.add(image);

    image.animateStyle(true)
        .when(2000, {
            x: 350,
            y: 450,
            width: 360,
            height: 270,
        })
        .start();
``` 

**易于扩展**

分而治之的图形定义策略允许扩展图形元素。

``` javascript
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
```

## 开源协议

本项目依据MIT开源协议发布，允许任何组织和个人免费使用。


## 项目地址

 * <https://github.com/guyoung/WeZRender>

------------------------------------------------

**Guyoung Studio**

![微信公众号](https://mmbiz.qlogo.cn/mmbiz_jpg/5IMiaY073fa7zxH6f5q5EticlwZPsYQtUnpYHspNiczmNyjtCXnR7LAmvpstK4EycfzIQkciboLh1qtWRcCibEPuDhA/0?wx_fmt=jpeg)



[wezrender-url]: https://github.com/guyoung/WeZRender
[wezrender-release-url]:https://github.com/guyoung/WeZRender/releases


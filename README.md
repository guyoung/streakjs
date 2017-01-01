WeZRender：微信小程序Canvas增强组件。
==================================

[![WeZRender version][wezrender-release-image]][wezrender-release-url]


![WeZRender Demo](https://mmbiz.qlogo.cn/mmbiz_gif/5IMiaY073fa7zxH6f5q5EticlwZPsYQtUnQGKDYwP10E5vDSVA6kTUMeDgedMQ57kicpG3dWzQBXg7uz6qLHSOT7A/0?wx_fmt=gif )

WeZRender是一个微信小程序Canvas增强组件，基于HTML5 Canvas类库ZRender。


## 使用

WXML：

``` html
    <canvas style="width: 375px; height: 600px;" canvas-id="line-canvas-1"></canvas>
```

JS：

``` javascript
    var wezrender = require('../../lib/wezrender');
	
    zr = wezrender.zrender.init("line-canvas-1", 375, 600);
```

## 特性

`数据驱动`

利用WeZRender绘图，只需定义图形数据。

``` javascript
    var circle = new wezrender.graphic.shape.Circle(      
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

`丰富的图形选项`

内置多种图形元素（圆形、椭圆、圆环、扇形、矩形、多边形、直线、曲线、心形、水滴、玫瑰线、Trochoid、文字、图片等），统一且丰富的图形属性充分满足个性化需求。

``` javascript
    var droplet = new wezrender.graphic.shape.Droplet({
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

`强大的动画支持`

提供promise式的动画接口和常用缓动函数，轻松实现各种动画需求。

``` javascript
    var image = new wezrender.graphic.Image({
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

`易于扩展`

分而治之的图形定义策略允许扩展图形元素。

``` javascript
	var Pin = wezrender.graphic.Path.extend({
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

------------------------------------------------

**Guyoung Studio**

![微信公众号](https://mmbiz.qlogo.cn/mmbiz_jpg/5IMiaY073fa7zxH6f5q5EticlwZPsYQtUnpYHspNiczmNyjtCXnR7LAmvpstK4EycfzIQkciboLh1qtWRcCibEPuDhA/0?wx_fmt=jpeg)




https://mmbiz.qlogo.cn/mmbiz_jpg/5IMiaY073fa7zxH6f5q5EticlwZPsYQtUnpYHspNiczmNyjtCXnR7LAmvpstK4EycfzIQkciboLh1qtWRcCibEPuDhA/0?wx_fmt=jpeg

[wezrender-url]: https://github.com/guyoung/WeZRender
[wezrender-release-image]: https://img.shields.io/badge/Release-v1.0.0-brightgreen.svg
[wezrender-release-url]:https://github.com/guyoung/WeZRender/releases


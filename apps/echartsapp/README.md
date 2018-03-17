微信小程序Canvas开发-使用ECharts
==================================


![ECharts Demo App](https://mmbiz.qpic.cn/mmbiz_gif/5IMiaY073fa67wFIy2jEFDHJwbcG4gvekJibB7oZ3PoV4dPUDp7q8bZxQtkG1rs47UwJVUAODtHH5ibLo8wjNvfRw/640?wx_fmt=gif)

[ECharts](https://github.com/ecomfe/echarts) 是使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器，底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。


## 使用ECharts

WXML：

``` html
<view class="container">
    <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
</view>
```

JS：

``` javascript
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        backgroundColor: "#ffffff",
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
        series: [{
            label: {
                normal: {
                    fontSize: 14
                }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: [{
                value: 55,
                name: '北京'
            }, {
                value: 20,
                name: '武汉'
            }, {
                value: 10,
                name: '杭州'
            }, {
                value: 20,
                name: '广州'
            }, {
                value: 38,
                name: '上海'
            },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
            }
        }]
    };

    chart.setOption(option);
    return chart;
}

Page({    
    data: {
        ec: {
            onInit: initChart
        }
    },

    onReady() {
    }
});

```

index.json 配置如下：

```json
{
  "usingComponents": {
    "ec-canvas": "../../ec-canvas/ec-canvas"
  }
}
```

## ECharts图表类型

* line：折线图，堆积折线图，区域图，堆积区域图。
* bar：柱形图（纵向），堆积柱形图，条形图（横向），堆积条形图。
* scatter：散点图，气泡图。散点图至少需要横纵两个数据，更高维度数据加入时可以映射为颜色或大小，当映射到大小时则为气泡图
* k：K线图，蜡烛图。常用于展现股票交易数据。
* pie：饼图，圆环图。饼图支持两种（半径、面积）南丁格尔玫瑰图模式。
* radar：雷达图，填充雷达图。高维度数据展现的常用图表。
* chord：和弦图。常用于展现关系数据，外层为圆环图，可体现数据占比关系，内层为各个扇形间相互连接的弦，可体现关系数据
* force：力导布局图。常用于展现复杂关系网络聚类布局。
* map：地图。内置世界地图、中国及中国34个省市自治区地图数据、可通过标准GeoJson扩展地图类型。支持svg扩展类地图应用，如室内地图、运动场、物件构造等。
* heatmap：热力图。用于展现密度分布信息，支持与地图、百度地图插件联合使用。
* gauge：仪表盘。用于展现关键指标数据，常见于BI类系统。
* funnel：漏斗图。用于展现数据经过筛选、过滤等流程处理后发生的数据变化，常见于BI类系统。
* evnetRiver：事件河流图。常用于展示具有时间属性的多个事件，以及事件随时间的演化。
* treemap：矩形式树状结构图，简称：矩形树图。用于展示树形数据结构，优势是能最大限度展示节点的尺寸特征。
* venn：韦恩图。用于展示集合以及它们的交集。
* tree：树图。用于展示树形数据结构各节点的层级关系

## 开源协议

本项目依据MIT开源协议发布，允许任何组织和个人免费使用。


## 项目地址

 * <https://github.com/guyoung/WeZRender>

------------------------------------------------

**Guyoung Studio**

![微信公众号](https://mmbiz.qlogo.cn/mmbiz_jpg/5IMiaY073fa7zxH6f5q5EticlwZPsYQtUnpYHspNiczmNyjtCXnR7LAmvpstK4EycfzIQkciboLh1qtWRcCibEPuDhA/0?wx_fmt=jpeg)



[wezrender-url]: https://github.com/guyoung/WeZRender
[wezrender-release-url]:https://github.com/guyoung/WeZRender/releases


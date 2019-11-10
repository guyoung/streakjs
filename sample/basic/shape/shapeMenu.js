import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '圆弧',
        path: 'shape/arc'
    }, {
        title: '箭头',
        path: 'shape/arrow'
    }, {
        title: '圆形',
        path: 'shape/circle'
    }, {
        title: '椭圆',
        path: 'shape/ellipse'
    }, {
        title: '标签',
        path: 'shape/label'
    }, {
        title: '线条',
        path: 'shape/line'
    }, {
        title: '路径',
        path: 'shape/path'
    }, {
        title: '多边形',
        path: 'shape/polygon'
    }, {
        title: '矩形',
        path: 'shape/rect'
    }, {
        title: '正多边形',
        path: 'shape/regularPolygon'
    }, {
        title: '圆环',
        path: 'shape/ring'
    }, {
        title: '扇形',
        path: 'shape/sector'
    }, {
        title: '星形',
        path: 'shape/star'
    }, {
        title: '文本',
        path: 'shape/text'
    }, {
        title: '文本路径',
        path: 'shape/textPath'
    }, {
        title: '图片',
        path: 'shape/image'
    }, {
        title: '精灵',
        path: 'shape/sprite'
    }, {
        title: '自定义',
        path: 'shape/customShape'
    }], layer)
}


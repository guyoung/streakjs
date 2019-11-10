import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '描边',
        path: 'style/stroke'
    }, {
        title: '线性渐变描边',
        path: 'style/strokeLinearGradient'
    }, {
        title: '填充',
        path: 'style/fill'
    }, {
        title: '线性渐变填充',
        path: 'style/fillLinearGradient'
    }, {
        title: '径向渐变填充',
        path: 'style/fillRadialGradient'
    }, {
        title: '图像填充',
        path: 'style/fillPattern'
    }, {
        title: '阴影',
        path: 'style/shadow'
    }, {
        title: '线条相交拐点',
        path: 'style/lineJoin'
    }, {
        title: '线条结束端点',
        path: 'style/lineCap'
    }, {
        title: '虚线',
        path: 'style/lineDash'
    }], layer)
}


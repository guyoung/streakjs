import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '位置',
        path: 'property/position'
    },{
        title: '大小',
        path: 'property/size'
    }, {
        title: '缩放',
        path: 'property/scale'
    }, {
        title: '旋转',
        path: 'property/rotation'
    }, {
        title: '倾斜',
        path: 'property/skew'
    }, {
        title: '偏移',
        path: 'property/offset'
    },{
        title: '透明',
        path: 'property/opacity'
    },{
        title: '隐藏',
        path: 'property/visible'
    },{
        title: '合成',
        path: 'property/globalCompositeOperation'
    }], layer)
}


import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '移动动画',
        path: 'animation/moveAnimation'
    },{
        title: '旋转动画',
        path: 'animation/rotationAnimation'
    },{
        title: '缩放动画',
        path: 'animation/scaleAnimation'
    },{
        title: '停止动画',
        path: 'animation/animationStop'
    },  {
        title: '缓动动画',
        path: 'animation/tween1'
    }], layer)
}

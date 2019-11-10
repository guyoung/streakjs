import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '动画',
        path: 'animation/animation1'
    }, {
        title: '补间动画',
        path: 'animation/tween1'
    }], layer)
}

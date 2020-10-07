import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '触摸事件',
        path: 'event/touchEvent'
    }, {
        title: 'Tap 事件',
        path: 'event/tapEvent'
    }, {
        title: '事件冒泡',
        path: 'event/eventBubble'
    }, {
        title: '事件触发',
        path: 'event/eventFire'
    }, {
        title: '事件移除',
        path: 'event/eventRemove'
    }, {
        title: '事件监听',
        path: 'event/listening'
    }, {
        title: '拖动事件',
        path: 'event/dragEvent'
    }], layer)
}


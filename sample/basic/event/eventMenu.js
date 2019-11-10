import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '触摸事件',
        path: 'event/touchEvent'
    }], layer)
}


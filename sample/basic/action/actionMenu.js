import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '拖拽',
        path: 'action/draggable'
    }], layer)
}


import * as menu from '../common/menu';

export function runDraw(layer) {
    menu.runDrawContentMenu([{
        title: '选择器',
        path: 'misc/selector'
    }, {
        title: '导出',
        path: 'misc/export'
    }], layer)
}


const streakjs = require('../../lib/streakjs/streakjs.min');

import { resolveCanvas } from '../../utils/canvasUtil';



Page({
    _stage: null,
    _action: null,
    data: {
        title: '',
        path: ''
    },

    onLoad: function (opts) {      
        var path = '';

        if (opts && opts.path) {
            path = opts.path;
        } else {
            path = 'main/mainMenu';
        }

        this.setData({
            path: path
        })

    },

    onReady: function () {

    },


    onShow: function () {    
        var canvas, hitCanvas, width, height;

        resolveCanvas('#sCanvas1').then(res1 => {
            if (res1) {
                canvas = res1.canvas;
                width = res1.width;
                height = res1.height

                resolveCanvas('#sCanvas2').then(res2 => {
                    if (res2) {
                        hitCanvas = res2.canvas;
                    }

                    this.buildStage(canvas, hitCanvas, width, height);
                });
            }
        });
    },

    onHide: function () {
       this._hideOrUnLoad();
    },


    onUnload: function () {
        this._hideOrUnLoad();
    },

    buildStage(canvas, hitCanvas, width, height) {
        try {
            canvas.width = canvas._width = width;
            canvas.height = canvas._height = height;

            hitCanvas.width = hitCanvas._width = width;
            hitCanvas.height = hitCanvas._height = height;

            streakjs.config.listenClickTap = true;

            streakjs.adaptive.setCanvasRef(canvas);

            this._stage = new streakjs.Stage({
                width: canvas.width,
                height: canvas.height
            });

            var layer = new streakjs.Layer({
                canvasElement: canvas,
                hitCanvasElement: hitCanvas,
            });

            this._stage.add(layer);

            this._action = require('../../sample/basic/' + this.data.path);            

            this._action.runDraw(layer);

            


        } catch (e) {
            console.log(e);
        }

    },

    touchStart(evt) {
        if (this._stage) {
            this._stage.events.touchstart(evt);
        }

    },

    touchMove(evt) {
        if (this._stage) {
            this._stage.events.touchmove(evt);
        }

        streakjs.DD.drag(evt);
    },

    touchEnd(evt) {
        if (this._stage) {
            this._stage.events.touchend(evt);
        }
        streakjs.DD.endDragBefore(evt);
        streakjs.DD.endDragAfter(evt);
    },

    _hideOrUnLoad() {
        if (this._action && this._action.destroy) {
            this._action.destroy();
        }

        if (this._stage) {
            this._stage.destroy();
        }
    }

})

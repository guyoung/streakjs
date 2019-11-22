const streakjs = wx.streakjs = require('../../lib/streakjs/streakjs.min');

import { resolveCanvas } from '../../utils/canvasUtil';

Page({
    _stage: null,
    _anim: null,
    data: {

    },

    onLoad: function () {

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

            this.runDraw(layer);

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

    runDraw(layer) {
        var sources = {
            'bg_1': '../../images/bg-1.png'
        };

        streakjs.loader.loadImages(sources, (res) => {
            var rect = new streakjs.shapes.Rect({
                x: 0,
                y: 0,
                width: layer.width,
                height: layer.height,
                fillLinearGradientStartPoint: { x: layer.width / 2, y: 0 },
                fillLinearGradientEndPoint: { x: layer.width / 2, y: layer.height },
                fillLinearGradientColorStops: [0, 'white', 1, '#feeeb7']
            });

            layer.add(rect);

            var text = new streakjs.shapes.Text({
                x: layer.width / 2,
                y: 120,
                text: 'streakjs',
                fontSize: 60,
                fill: '#ea6c00'
            });

            text.offsetX = text.width / 2;

            layer.add(text);

            layer.draw(); 
            
            var width = 240;
            var height = 60;

            var button = new streakjs.shapes.Button({
                    x: (this._stage.width - width) / 2,
                    y: (this._stage.height - height) / 2,
    
                });

            button.add(
                new streakjs.shapes.Rect({
                    fillPatternImage: res.bg_1,
                    fillPatternOffset: { x: -220, y: 70 },
                    cornerRadius: 10,
                    shadowColor: 'black',
                    shadowBlur: 0.5,
                    shadowOffset: { x: 3, y: 5 },
                    shadowOpacity: 0.5
                })
            );

            button.add(
                new streakjs.shapes.Text({
                    width: width,
                    height: height,
                    text: '基本功能',
                    fontSize: 40,
                    padding: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    fill: 'white',
                    shadowColor: 'black',
                    shadowBlur: 0,
                    shadowOffset: { x: 2, y: 5 },
                    shadowOpacity: 0.5
                })
            );
                     
            button.on('tap', function () {
                wx.navigateTo({
                    url: '../basic/basic'
                })
            });

            layer.add(button);


            var angularSpeed = 90;
            this._anim = new streakjs.Animation(function (frame) {
                var angleDiff = (frame.timeDiff * angularSpeed) / 1000;

                text.rotate(angleDiff);

            }, layer);

            this._anim.start();


        });
    },

    _hideOrUnLoad() {
        if (this._anim && this._anim.isRunning()) {
            this._anim.stop();

            this._anim = null;
        }

        if (this._anim) {
            this._anim = null;
        }

        if (this._stage) {
            this._stage.destroy();

            this._stage = null;
        }
    }


})

var util = require('./core/util');
var config = require('./config');
var Style = require('./graphic/Style');
var Pattern = require('./graphic/Pattern');
var log = require('./core/log');

/**
 * @alias module:zrender/Layer
 * @constructor
 * @extends module:zrender/mixin/Transformable
 * @param {Object} dom
 * @param {module:zrender/Painter} painter
 * @param {number} [dpr]
 */
var Layer = function (dom, painter, dpr) {

    this.id = dom.id;
    this.dom = dom;

    this.ctxBack = null;

    this.painter = painter;

    this.config = null;

    // Configs
    /**
     * 每次清空画布的颜色
     * @type {string}
     * @default 0
     */
    this.clearColor = 0;
    /**
     * 是否开启动态模糊
     * @type {boolean}
     * @default false
     */
    this.motionBlur = false;
    /**
     * 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
     * @type {number}
     * @default 0.7
     */
    this.lastFrameAlpha = 0.7;

    /**
     * Layer dpr
     * @type {number}
     */
    this.dpr = dpr;
};

Layer.prototype = {

    constructor: Layer,

    elCount: 0,

    __dirty: true,

    initContext: function () {
        this.ctx = this.dom.getContext('2d');

        this.ctx.dpr = this.dpr;
    },
    
    /**
     * 清空该层画布
     * @param {boolean} clearAll Clear all with out motion blur
     */
    clear: function (clearAll) {
        var dom = this.dom;
        var ctx = this.ctx;
        var width = dom.width;
        var height = dom.height;

        var clearColor = this.clearColor;

        var lastFrameAlpha = this.lastFrameAlpha;

        var dpr = this.dpr;

        ctx.clearRect(0, 0, width, height);
        if (clearColor) {
            var clearColorGradientOrPattern;
            // Gradient
            if (clearColor.colorStops) {
                // Cache canvas gradient
                clearColorGradientOrPattern = clearColor.__canvasGradient || Style.getGradient(ctx, clearColor, {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                });

                clearColor.__canvasGradient = clearColorGradientOrPattern;
            }
            // Pattern
            else if (clearColor.image) {
                clearColorGradientOrPattern = Pattern.prototype.getCanvasPattern.call(clearColor, ctx);
            }
            ctx.save();
            ctx.setFillStyle(clearColorGradientOrPattern || clearColor);
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }
    }
};

module.exports = Layer;

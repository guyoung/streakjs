var config = require('./config');
var util = require('./core/util');
var log = require('./core/log');
var BoundingRect = require('./core/BoundingRect');
var timsort = require('./core/timsort');
var Layer = require('./Layer');

function parseInt10(val) {
    return parseInt(val, 10);
}

var tmpRect = new BoundingRect(0, 0, 0, 0);
var viewRect = new BoundingRect(0, 0, 0, 0);

function isDisplayableCulled(el, width, height) {
    tmpRect.copy(el.getBoundingRect());
    if (el.transform) {
        tmpRect.applyTransform(el.transform);
    }
    viewRect.width = width;
    viewRect.height = height;
    return !tmpRect.intersect(viewRect);
}

function isClipPathChanged(clipPaths, prevClipPaths) {
    if (clipPaths == prevClipPaths) { // Can both be null or undefined
        return false;
    }

    if (!clipPaths || !prevClipPaths || (clipPaths.length !== prevClipPaths.length)) {
        return true;
    }
    for (var i = 0; i < clipPaths.length; i++) {
        if (clipPaths[i] !== prevClipPaths[i]) {
            return true;
        }
    }
}

function doClip(clipPaths, ctx) {
	/*** we
    for (var i = 0; i < clipPaths.length; i++) {
        var clipPath = clipPaths[i];
        var path = clipPath.path;

        clipPath.setTransform(ctx);
        path.beginPath(ctx);
        clipPath.buildPath(path, clipPath.shape);
        ctx.clip();
        // Transform back
        clipPath.restoreTransform(ctx);
    }
	we ***/
}

/**
 * @alias module:zrender/Painter
 * @constructor
 * @param {Object} root 绘图容器
 * @param {module:zrender/Storage} storage
 * @param {Ojbect} opts
 */
var Painter = function (root, storage, opts) {


    this._opts = opts = util.extend({}, opts || {});

    /**
     * @type {number}
     */
    this.dpr = opts.devicePixelRatio || config.devicePixelRatio;

    /**
     * 绘图容器
     * @type {Object}
     */
    this.root = root;

    /**
     * @type {module:zrender/Storage}
     */
    this.storage = storage;

    /**
     * @type {Array.<number>}
     * @private
     */
    var zlevelList = this._zlevelList = [];

    /**
     * @type {Object.<string, module:zrender/Layer>}
     * @private
     */
    var layers = this._layers = {};

    /**
     * @type {Object.<string, Object>}
     * @type {private}
     */
    this._layerConfig = {};


    // Use canvas width and height directly
    var width = root.width;
    var height = root.height;
    this._width = width;
    this._height = height;

    // Create layer if only one given canvas
    // Device pixel ratio is fixed to 1 because given canvas has its specified width and height
    var mainLayer = new Layer(root, this, 1);
    mainLayer.initContext();
    // FIXME Use canvas width and height
    // mainLayer.resize(width, height);
    layers[0] = mainLayer;
    zlevelList.push(0);

};

Painter.prototype = {

    constructor: Painter,

    /**
     * @return {HTMLDivElement}
     */
    getViewportRoot: function () {
        return this._layers[0].dom;
    },

    /**
     * 刷新
     * @param {boolean} [paintAll=false] 强制绘制所有displayable
     */
    refresh: function (paintAll) {
		
        var list = this.storage.getDisplayList(true);	
		
        this._paintList(list, paintAll);       

        return this;
    },


    _paintList: function (list, paintAll) {

        if (paintAll == null) {
            paintAll = false;
        }

        this._doPaintList(list, paintAll);
    },

    _doPaintList: function (list, paintAll) {
		
        var currentLayer;
        var currentZLevel;
        var ctx;

        // var invTransform = [];
        var scope;

        var width = this._width;
        var height = this._height;

        for (var i = 0, l = list.length; i < l; i++) {
            var el = list[i];
            var elZLevel = 0;

            var elFrame = el.__frame;

            // Change draw layer
            if (currentZLevel !== elZLevel) {
                if (ctx) {
                    ctx.restore();
                }

                // Reset scope
                scope = {};

                // Only 0 zlevel if only has one canvas
                currentZLevel = elZLevel;
                currentLayer = this.getLayer(currentZLevel);

                ctx = currentLayer.ctx;
                ctx.save();

                // Reset the count
                currentLayer.__unusedCount = 0;

                if (currentLayer.__dirty || paintAll) {
                    currentLayer.clear();
                }
            }

            if (!(currentLayer.__dirty || paintAll)) {
                continue;
            }

            if (elFrame >= 0) {

            }
            else {
                this._doPaintEl(el, currentLayer, paintAll, scope);
            }

            el.__dirty = false;
        }

        // Restore the lastLayer ctx
        ctx && ctx.restore();
        // If still has clipping state
        // if (scope.prevElClipPaths) {
        //     ctx.restore();
        // }        
    },

    _doPaintEl: function (el, currentLayer, forcePaint, scope) {
		
        var ctx = currentLayer.ctx;
        var m = el.transform;
        if (
            (currentLayer.__dirty || forcePaint)
            // Ignore invisible element
            && !el.invisible
            // Ignore transparent element
            && el.style.opacity !== 0
            // Ignore scale 0 element, in some environment like node-canvas
            // Draw a scale 0 element can cause all following draw wrong
            // And setTransform with scale 0 will cause set back transform failed.
            && !(m && !m[0] && !m[3])
            // Ignore culled element
            && !(el.culling && isDisplayableCulled(el, this._width, this._height))
        ) {

            var clipPaths = el.__clipPaths;

            // Optimize when clipping on group with several elements
            if (scope.prevClipLayer !== currentLayer
                || isClipPathChanged(clipPaths, scope.prevElClipPaths)
            ) {
                // If has previous clipping state, restore from it
                if (scope.prevElClipPaths) {
                    scope.prevClipLayer.ctx.restore();
                    scope.prevClipLayer = scope.prevElClipPaths = null;

                    // Reset prevEl since context has been restored
                    scope.prevEl = null;
                }
                // New clipping state
                if (clipPaths) {
                    ctx.save();
                    doClip(clipPaths, ctx);
                    scope.prevClipLayer = currentLayer;
                    scope.prevElClipPaths = clipPaths;
                }
            }
            el.beforeBrush && el.beforeBrush(ctx);

            el.brush(ctx, scope.prevEl || null);
            scope.prevEl = el;

			
            /*** we ***/
            ctx.draw(true);
            /*** we ***/

            el.afterBrush && el.afterBrush(ctx);
        }
    },

    /**
     * 获取 zlevel 所在层，如果不存在则会创建一个新的层
     * @param {number} zlevel
     * @return {module:zrender/Layer}
     */
    getLayer: function (zlevel) {
        return this._layers[0];
    },

    // Iterate each layer
    eachLayer: function (cb, context) {
        var zlevelList = this._zlevelList;
        var z;
        var i;
        for (i = 0; i < zlevelList.length; i++) {
            z = zlevelList[i];
            cb.call(context, this._layers[z], z);
        }
    },

    // Iterate each buildin layer
    eachBuildinLayer: function (cb, context) {
        var zlevelList = this._zlevelList;
        var layer;
        var z;
        var i;
        for (i = 0; i < zlevelList.length; i++) {
            z = zlevelList[i];
            layer = this._layers[z];
            if (layer.isBuildin) {
                cb.call(context, layer, z);
            }
        }
    },

    // Iterate each other layer except buildin layer
    eachOtherLayer: function (cb, context) {
        var zlevelList = this._zlevelList;
        var layer;
        var z;
        var i;
        for (i = 0; i < zlevelList.length; i++) {
            z = zlevelList[i];
            layer = this._layers[z];
            if (!layer.isBuildin) {
                cb.call(context, layer, z);
            }
        }
    },

    /**
     * 获取所有已创建的层
     * @param {Array.<module:zrender/Layer>} [prevLayer]
     */
    getLayers: function () {
        return this._layers;
    },

    /**
     * 清除hover层外所有内容
     */
    clear: function () {
        this.eachBuildinLayer(this._clearLayer);
        return this;
    },

    _clearLayer: function (layer) {
        layer.clear();
    },

 /**
         * 修改指定zlevel的绘制参数
         *
         * @param {string} zlevel
         * @param {Object} config 配置对象
         * @param {string} [config.clearColor=0] 每次清空画布的颜色
         * @param {string} [config.motionBlur=false] 是否开启动态模糊
         * @param {number} [config.lastFrameAlpha=0.7]
         *                 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
         */
        configLayer: function (zlevel, config) {
            if (config) {
                var layerConfig = this._layerConfig;
                if (!layerConfig[zlevel]) {
                    layerConfig[zlevel] = config;
                }
                else {
                    util.merge(layerConfig[zlevel], config, true);
                }

                var layer = this._layers[zlevel];

                if (layer) {
                    util.merge(layer, layerConfig[zlevel], true);
                }
            }
        },

    /**
     * 释放
     */
    dispose: function () {
        this.root =
            this.storage =

            this._domRoot =
            this._layers = null;
    },


    /**
     * 获取绘图区域宽度
     */
    getWidth: function () {
        return this._width;
    },

    /**
     * 获取绘图区域高度
     */
    getHeight: function () {
        return this._height;
    }
};

module.exports = Painter;


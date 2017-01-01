// Global defines

var guid = require('./core/guid');
var zrUtil = require('./core/util');
var Handler = require('./Handler');
var Storage = require('./Storage');
var Animation = require('./animation/Animation');
var log = require('./core/log');

var painterCtors = {
    canvas: require('./Painter')
};

var instances = {};    // ZRender实例map索引

var zrender = {};

/**
 * @type {string}
 */
zrender.version = 'WeZRender';

/*** we
 * Initializing a zrender instance
 * @param {string} id
 * @param {number} width 
 * @param {number} height
 * @return {module:zrender/ZRender}
 */
zrender.init = function (id, width, height) {
    var dom = {
        id: id,
        width: width,
        height: height,
        context: null,
        getContext: function () {
            if (!this.context) {
                var ctx = wx.createCanvasContext(this.id);
                ctx.id = this.id;
				
                if (!ctx.setTransform) {
                    ctx.setTransform = function () { }
                }
				
				if (!ctx.setTransform) {
					 ctx.measureText = {
                    
					};
				}               
				
                this.context = ctx;
            }
            return this.context;
        }
    };
    var opts = {};
    var zr = new ZRender(guid(), dom, opts);
    instances[zr.id] = zr;
    return zr;
};
/*** we ***/

/**
 * Dispose zrender instance
 * @param {module:zrender/ZRender} zr
 */
zrender.dispose = function (zr) {
    if (zr) {
        zr.dispose();
    }
    else {
        for (var key in instances) {
            if (instances.hasOwnProperty(key)) {
                instances[key].dispose();
            }
        }
        instances = {};
    }

    return zrender;
};

/**
 * Get zrender instance by id
 * @param {string} id zrender instance id
 * @return {module:zrender/ZRender}
 */
zrender.getInstance = function (id) {
    return instances[id];
};

zrender.registerPainter = function (name, Ctor) {
    painterCtors[name] = Ctor;
};

function delInstance(id) {
    delete instances[id];
}

/**
 * @module zrender/ZRender
 */
/**
 * @constructor
 * @alias module:zrender/ZRender
 * @param {string} id
 * @param {Object} dom
 * @param {Object} opts
 */
var ZRender = function (id, dom, opts) {

    opts = opts || {};

    /**
     * @type {Object}
     */
    this.dom = dom;

    /**
     * @type {string}
     */
    this.id = id;

    var self = this;
    var storage = new Storage();

    var rendererType = 'canvas';

    var painter = new painterCtors[rendererType](dom, storage, opts);

    this.storage = storage;
    this.painter = painter;

    var handlerProxy = null;

    this.handler = new Handler(storage, painter, handlerProxy, painter.root);

    /**
     * @type {module:zrender/animation/Animation}
     */
    this.animation = new Animation({
        stage: {
            update: zrUtil.bind(this.flush, this)
        }
    });
    this.animation.start();

    /**
     * @type {boolean}
     * @private
     */
    this._needsRefresh;

    // 修改 storage.delFromMap, 每次删除元素之前删除动画
    // FIXME 有点ugly
    var oldDelFromMap = storage.delFromMap;
    var oldAddToMap = storage.addToMap;

    storage.delFromMap = function (elId) {
        var el = storage.get(elId);

        oldDelFromMap.call(storage, elId);

        el && el.removeSelfFromZr(self);
    };

    storage.addToMap = function (el) {
        oldAddToMap.call(storage, el);

        el.addSelfToZr(self);
    };
};

ZRender.prototype = {

    constructor: ZRender,
    /**
     * 获取实例唯一标识
     * @return {string}
     */
    getId: function () {
        return this.id;
    },

    /**
     * 添加元素
     * @param  {module:zrender/Element} el
     */
    add: function (el) {
        this.storage.addRoot(el);
        this._needsRefresh = true;
    },

    /**
     * 删除元素
     * @param  {module:zrender/Element} el
     */
    remove: function (el) {
        this.storage.delRoot(el);
        this._needsRefresh = true;
    },

     /**
         * Change configuration of layer
         * @param {string} zLevel
         * @param {Object} config
         * @param {string} [config.clearColor=0] Clear color
         * @param {string} [config.motionBlur=false] If enable motion blur
         * @param {number} [config.lastFrameAlpha=0.7] Motion blur factor. Larger value cause longer trailer
        */
        configLayer: function (zLevel, config) {
            this.painter.configLayer(zLevel, config);
            this._needsRefresh = true;
        },


    /**
     * Repaint the canvas immediately
     */
    refreshImmediately: function () {
        // Clear needsRefresh ahead to avoid something wrong happens in refresh
        // Or it will cause zrender refreshes again and again.
        this._needsRefresh = false;
        this.painter.refresh();
        /**
         * Avoid trigger zr.refresh in Element#beforeUpdate hook
         */
        this._needsRefresh = false;
    },

    /**
     * Mark and repaint the canvas in the next frame of browser
     */
    refresh: function () {
        this._needsRefresh = true;
    },

    /**
     * Perform all refresh
     */
    flush: function () {
        if (this._needsRefresh) {
            this.refreshImmediately();
        }
    },


    /**
     * Stop and clear all animation immediately
     */
    clearAnimation: function () {
        this.animation.clear();
    },

    /**
     * Get container width
     */
    getWidth: function () {
        return this.painter.getWidth();
    },

    /**
     * Get container height
     */
    getHeight: function () {
        return this.painter.getHeight();
    },

    /**
     * Bind event
     *
     * @param {string} eventName Event name
     * @param {Function} eventHandler Handler function
     * @param {Object} [context] Context object
     */
    on: function (eventName, eventHandler, context) {
        this.handler.on(eventName, eventHandler, context);
    },

    /**
     * Unbind event
     * @param {string} eventName Event name
     * @param {Function} [eventHandler] Handler function
     */
    off: function (eventName, eventHandler) {
        this.handler.off(eventName, eventHandler);
    },

    /**
     * Trigger event manually
     *
     * @param {string} eventName Event name
     * @param {event=} event Event object
     */
    trigger: function (eventName, event) {
        this.handler.trigger(eventName, event);
    },


    /**
     * Clear all objects and the canvas.
     */
    clear: function () {
        this.storage.delRoot();
        this.painter.clear();
    },

    /**
     * Dispose self.
     */
    dispose: function () {
        this.animation.stop();

        this.clear();
        this.storage.dispose();
        this.painter.dispose();
        this.handler.dispose();

        this.animation =
            this.storage =
            this.painter =
            this.handler = null;

        delInstance(this.id);
    }
};

module.exports = zrender;


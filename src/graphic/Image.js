/**
 * Image element
 * @module zrender/graphic/Image
 */

var Displayable = require('./Displayable');
var BoundingRect = require('../core/BoundingRect');
var zrUtil = require('../core/util');

/**
 * @alias zrender/graphic/Image
 * @extends module:zrender/graphic/Displayable
 * @constructor
 * @param {Object} opts
 */
function ZImage(opts) {
    Displayable.call(this, opts);
}

ZImage.prototype = {

    constructor: ZImage,

    type: 'image',

    brush: function (ctx, prevEl) {
        var style = this.style;
        var image = style.image;

        // Must bind each time
        style.bind(ctx, this, prevEl);

        var width = style.width;
        var height = style.height;
        var x = style.x || 0;
        var y = style.y || 0;

        // 设置transform
        this.setTransform(ctx);

        ctx.drawImage(
            image,
            x, y, width, height
        );

        // Draw rect text
        if (style.text != null) {
            this.drawRectText(ctx, this.getBoundingRect());
        }

    },

    getBoundingRect: function () {
        var style = this.style;
        if (!this._rect) {
            this._rect = new BoundingRect(
                style.x || 0, style.y || 0, style.width || 0, style.height || 0
            );
        }
        return this._rect;
    }
};

zrUtil.inherits(ZImage, Displayable);

module.exports = ZImage;

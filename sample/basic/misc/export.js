const streakjs = require('../../../lib/streakjs/streakjs.min');

export function runDraw(layer) {

    var rect = new streakjs.shapes.Rect({
        x: 0,
        y: 0,
        width: layer.width,
        height: layer.height,      
        fill: '#ffffff',        
    });

    layer.add(rect);

    var regularPolygon = new streakjs.shapes.RegularPolygon({
        x: 100,
        y: 150,
        sides: 3,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });
    layer.add(regularPolygon);  

    var text1 = new streakjs.shapes.Text({
        x: 250,
        y: layer.height - 50,
        text: '导出',
        fontSize: 24,
        padding: 5,
        fill: 'black'
    })

    text1.on('tap', function (e) {
        text1.visible = false;

        layer.draw();

        const imageData = layer.getContext().getImageData(0, 0, layer.width, layer.height);       

        wx.canvasPutImageData({
            canvasId: 'cacheCanvas',
            x: 0,
            y: 0,
            width: layer.width,
            height: layer.height,
            data: imageData.data,
            success (res) {           
                wx.canvasToTempFilePath({
                    canvasId: 'cacheCanvas',
                    x: 0,
                    y: 0,
                    width: layer.width,
                    height: layer.height,
                    destWidth: layer.width,
                    destHeight: layer.height,                
                    success(res) {    
                        wx.previewImage({                        
                            urls: [res.tempFilePath]                        
                        })

                        text1.visible = true;
    
                        layer.draw();
                    }
                })
            }
          });
    });

    layer.add(text1);
    layer.draw();
}
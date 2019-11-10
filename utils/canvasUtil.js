export function resolveCanvas(selector) {
    return new Promise((resolve, reject) => {
        wx.createSelectorQuery()
        .select(selector)
        .fields({
            size: true,
            node: true
        })      
        .exec((res) => {  
          
            if (res && res[0]) {
                resolve({
                    canvas: res[0].node,
                    width: res[0].width,
                    height: res[0].height
                })
            } else {
                resolve(null)
            }           
        });
    });
}
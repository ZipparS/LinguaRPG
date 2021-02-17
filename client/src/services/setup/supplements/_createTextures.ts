export default function (storage: any) {
    return new Promise((resolve) => {
        for (let category in storage._tilesets) {
            
            for (let tileset in storage._tilesets[category]) {
                if(tileset in storage.textures[category]) continue
    
                let {texture, data, metadata} = storage._tilesets[category][tileset]
                
                let baseTexture = PIXI.BaseTexture.from(data)
            
                storage.textures[category][tileset] = []
            
                for (let c = 0; c < texture.orig.height  / metadata.h; c++) {
                    for (let r = 0; r < texture.orig.width / metadata.w; r++) {
                        let texture = new PIXI.Texture(
                            baseTexture, 
                            new PIXI.Rectangle(r * metadata.w, c * metadata.h, metadata.w, metadata.h)
                        )
            
                        storage.textures[category][tileset].push(texture)
                    }
                }
            }
        }
        
        console.log('createTexture')
        return resolve()
    })
}
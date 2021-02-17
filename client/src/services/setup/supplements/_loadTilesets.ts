export default function(loader: PIXI.Loader | any, xhrType: any, storage: any, options: any, tilesets: any[]) {
    return new Promise((resolve) => {
        
        for(let tileset of tilesets) {

            let category = tileset.url.slice(31, -tileset.tag.length - 1)
            

            if(tileset in storage._tilesets[category]) continue

            loader.add(tileset.tag, tileset.url, 
                { 
                    xhrType: xhrType.BLOB, 
                    metadata: Object.assign(options.GAME_OPTIONS[category], {category}) 
                }
            )
            
        }

        loader.load((_: any, tilesets: any) => {

            for(let tileset in tilesets) {
                storage._tilesets[tilesets[tileset].metadata.category][tileset] = tilesets[tileset]
            }
            
            console.log('loadTilesets')
            resolve()
        })

    })
}

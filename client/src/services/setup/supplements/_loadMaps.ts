export default function(loader: PIXI.Loader | any, xhrType: any, storage: any, options: any, maps: any) {
return new Promise((resolve) => {
    
    for(let map of maps) {
        if(map in storage._maps) continue
        loader.add(`${map}`, `http://localhost:${options.PORTS.PROVIDER}/maps/${map}`, xhrType.JSON)
    }
    
    loader.load((_: any, maps: any) => {

        for(let map in maps) storage._maps[map] = maps[map]
        
        console.log('loadMaps')
        return resolve()
    })
})

}
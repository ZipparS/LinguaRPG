export default async function(playState: any, services: any) {
    // culling

    // is it new map?
    for(let map in playState.map.adjacent) {

        if(playState.player.cell.x === playState.map.adjacent[map].entry.x && 
            playState.player.cell.y === playState.map.adjacent[map].entry.y) {
  
            playState.changeMap(map)
            
            services.emit.socket.changeTo(services.storage.locations[map].port)
            
            let newMaps = []
            for(let map in playState.map.adjacent) {
                if(!(map in services.storage._maps)) {
                    newMaps.push(map)
                }
            }
            
            if(newMaps.length) {
                await services.setup.loadMaps(newMaps)
                await services.setup.createLocations()
            }
            
                
            break
        }
  
    }
}
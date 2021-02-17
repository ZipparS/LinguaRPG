export default function(loader: PIXI.Loader | any, xhrType: any, storage: any) {
    return new Promise((resolve) => loader
    
    .add('player', 'http://localhost:8080/player', { xhrType: xhrType.BLOB })
    
    .load((_: any, json: any) => {
    
        storage.player = json.player.data; 
        
        console.log('loadPlayer'); 
        return resolve()
    }))
    
    }
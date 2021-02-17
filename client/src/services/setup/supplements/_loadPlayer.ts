export default function(loader: PIXI.Loader | any, xhrType: any, storage: any, OPTIONS: any) {
return new Promise((resolve) => loader

.add('player', `http://localhost:${OPTIONS.PORTS.PROVIDER}/player`, { xhrType: xhrType.JSON })

.load((_: any, json: any) => {

    storage.player = json.player.data; 
    
    console.log('loadPlayer'); 
    return resolve()
}))

}
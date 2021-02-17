export default function(playState: any, zoom: any) {
    if(playState.zoom >= zoom) {
        playState.zoom = zoom
        playState.stage.scale.set(zoom, zoom)
        playState.stage.scale
        
        playState.removeScript(playState.zoomCamera)
        console.log(playState.zoom)
        return
    }
    
    playState.zoom += .05
    playState.stage.scale.set(playState.zoom, playState.zoom)
}
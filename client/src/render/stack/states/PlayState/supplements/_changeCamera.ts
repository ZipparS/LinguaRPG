export default function(playState: any, actor: any, zoom: any) {
    playState.target.isTarget = false
    playState.target = actor
    playState.target.isTarget = true

    if(zoom) playState.addScript(() => playState.zoomCamera(zoom))

    playState.pivot()
    playState.resize()
    
    playState.target.sprite.pivot.set(null)
}
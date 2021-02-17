export default function(playState: any, renderer: any) {
    
    playState.stage.scale.set(
        Math.round(window.innerWidth / playState.zoomX), 
        Math.round(window.innerHeight / playState.zoomY)   
    )


    
    let targetOffsetX = (renderer.width  / 2)
    let targetOffsetY = (renderer.height / 2)

    playState.target.sprite.x = targetOffsetX
    playState.target.sprite.y = targetOffsetY

    playState.stage.position.set(playState.target.sprite.x, playState.target.sprite.y)

    playState.stage.pivot.set(
        targetOffsetX + (playState.target.sprite.width  / 2), 
        targetOffsetY + (playState.target.sprite.height / 2)
    )

    playState.map.layers.after.position.set(
        targetOffsetX + ((playState.target.sprite.width - 16) / 2), 
        targetOffsetY + ((playState.target.sprite.height - 16) + 2)
    )

    playState.map.layers.before.position.set(
        targetOffsetX + ((playState.target.sprite.width - 16) / 2), 
        targetOffsetY + ((playState.target.sprite.height - 16) + 2)
    )

    playState.map.actors.forEach((actor: any) => {
        if(!actor.isTarget) {
            actor.sprite.position.set(
                targetOffsetX + actor.position.x, 
                targetOffsetY + actor.position.y
            )
        }
    })
}
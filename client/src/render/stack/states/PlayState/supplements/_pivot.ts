export default function(playState: any) {

    playState.map.layers.after.pivot.set(playState.target.position.x, playState.target.position.y)
    playState.map.layers.before.pivot.set(playState.target.position.x, playState.target.position.y)

    playState.map.actors.forEach((actor: any) => {
        if(!actor.isTarget) {
            actor.sprite.pivot.set(
                playState.target.position.x,
                playState.target.position.y
            )
        }
    })

    
}
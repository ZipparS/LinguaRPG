export default function(playState: any, game: any, location: any) {
    if(!playState.player.isTarget) return
    // game.stack.fadeInState.show()
    // game.stack.fadeInState.addScript(() => game.stack.fadeInState.fadeOut())

    console.log(location)
    

    let { x, y } = playState.map.adjacent[location].to

    playState.player.location = location
    playState.map.collision[playState.player.cell.y][playState.player.cell.x] = 1
    playState.player.cell = { x, y }
    playState.map.collision[playState.player.cell.y][playState.player.cell.x] = 0
    
    playState.player.position = {
        x: playState.player.cell.x * 16,
        y: playState.player.cell.y * 16
    }

    playState.player.target = {
        x: playState.player.position.x,
        y: playState.player.position.y
    }

    playState.map.actors = playState.map.actors.filter((actor: any) => actor.constructor.name !== 'Hero')

    playState.map = game.services.storage.locations[location]

    playState.map.actors.push(playState.player)
    
    playState.stage.removeChildren()

    playState.stage.addChild(game.services.storage.locations[location].layers.after)
    playState.map.actors.forEach((actor: any) => playState.stage.addChild(actor.sprite))
    playState.stage.addChild(game.services.storage.locations[location].layers.before)


    playState.resize()
    playState.pivot()

    if(playState.map.lesson && 'first') {
        // this.popupModal('lesson')
    }
}
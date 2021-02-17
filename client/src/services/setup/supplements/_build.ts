import Game from "@/Game";
import Hero from "@/entities/actors/Hero/Hero";

export default async function(game: Game) {

    if(game.services.status.builded) return

    game.stack.stage.addChild(new PIXI.display.Layer(game.stack.playState.actorsGroup))

    game.stack.playState.player = new Hero(game.services.storage.player)
    console.log(game.services.storage.player)
    game.stack.playState.target = game.stack.playState.player
    game.stack.playState.target.isTarget = true

    game.stack.playState.map = game.services.storage.locations[game.stack.playState.player.location]
    game.stack.playState.map.actors.push(game.stack.playState.player)
    
    game.services.emit.socket.open(game.stack.playState.map.port)
    
    
    // game.stack.playState.stage.addChild(game.stack.playState.map.layers.after)

    // game.services.emit.socket.

    // game.stack.playState.map.actors.forEach((actor: any) => {
    //     actor.sprite.parentGroup = game.stack.playState.actorsGroup
    //     game.stack.playState.stage.addChild(actor.sprite)

    //     actor.occupy(game.stack.playState)
    // })
    
    // game.stack.playState.stage.addChild(game.stack.playState.map.layers.before)

    game.stack.playState.resize()
    game.stack.playState.pivot()
    
    
    game.stack.startState.hide()
    game.engine.remove(game.engine.loops.preview.loop)
    game.stack.stage.filters = []

    game.stack.playState.show()
    game.stack.GUI.show()
    game.stack.GUI.HUD.resize()
    
    game.engine.add(game.engine.loops.game.loop)

    
    game.controller.bindKeys()
    window.addEventListener('keyup',   (event) => game.controller.keyDownUp(event))
    window.addEventListener('keydown', (event) => game.controller.keyDownUp(event))

    game.services.status.builded = true
    
}
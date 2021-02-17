import {game} from '@index'

import Loop from '@/engine/loops/Loop'


export default class GameLoop extends Loop {

  loop() {
    if (!game.services.emit.socket.connected) return
    console.log('game')

    if(game.stack.playState.scripts.length) game.stack.playState.playScripts()

    for(let actor of game.stack.playState.map.actors) {
      if(actor.scripts.length) {
        for(let script of actor.scripts) {
          Object.values<any>(script)[0]()
        }
      }
    }

    if(game.controller.up.active)    game.stack.playState.player.up()
    if(game.controller.down.active)  game.stack.playState.player.down()
    if(game.controller.left.active)  game.stack.playState.player.left()
    if(game.controller.right.active) game.stack.playState.player.right()

    if(game.stack.playState.target.moving) game.stack.playState.pivot()

    this.scripts.length ? this.scripts.forEach((script: any) => { script() }) : null

    game.renderer.screen.render(game.stack.stage)

  }

}
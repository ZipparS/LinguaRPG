import {game} from '@index'

import Loop from '@/engine/loops/Loop'


export default class PreviewLoop extends Loop {

  loop() {
    console.log('preview')

    game.stack.startState.interpolateProgress()

    game.stack.startState.drops.forEach((drop: any) => {
      drop.update(game.stack.startState.bottom)
    })

    game.stack.startState.waves.forEach((wave: any) => {
      wave.update(game.stack.startState.bottom)
    })


    this.scripts.length ? this.scripts.forEach((script: any) => { script() }) : null

    game.renderer.screen.render(game.stack.stage)

  }

}


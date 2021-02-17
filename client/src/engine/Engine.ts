import PreviewLoop from '@/engine/loops/previewLoop/PreviewLoop'
import GameLoop from '@/engine/loops/gameLoop/GameLoop'

export default class Engine extends PIXI.Ticker {
  loops: any

  constructor() {
    super()

    this.loops = {
      preview: new PreviewLoop(),
      game:    new GameLoop()
    }



  }
}
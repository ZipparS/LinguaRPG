import '@modules'

// Disable interpolation when scaling, will make texture be pixelated
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
PIXI.settings.ROUND_PIXELS = true
 
// "1.000.000 < tiles" possibility
PIXI.tilemap.Constant.use32bitIndex = true
   
import Game from '@/Game'

export const game = new Game('#canvas') 

game.setup()
import { game } from '@index'

export default class Renderer {
    screen: any

    constructor($canvas: HTMLCanvasElement) {
        
        this.screen = PIXI.autoDetectRenderer({
            view: $canvas,
            width: window.innerWidth,
            height: window.innerHeight,
            resolution: window.devicePixelRatio
            
        })

    }
    
    resize() {
        let WIDTH = window.innerWidth % 2 ? window.innerWidth - 1 : window.innerWidth
        let HEIGHT = window.innerHeight % 2 ? window.innerHeight - 1 : window.innerHeight
        this.screen.resize(WIDTH, HEIGHT)

        game.stack.startState.resize()

        if(game.services.status.builded) {
            game.stack.playState.resize()
            game.stack.GUI.HUD.resize()
        }

    }
}
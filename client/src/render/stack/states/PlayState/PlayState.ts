import State from "../State";
import { game } from "@index";

import _pivot from "./supplements/_pivot"
import _resize from "./supplements/_resize";
import _changeCamera from "./supplements/_changeCamera";
import _zoomCamera from "./supplements/_zoomCamera";
import _checkPosition from "./supplements/_checkPosition";
import _changeMap from "./supplements/_changeMap";
import _interaction from "./supplements/_interaction";
import _playScripts from "./supplements/_playScripts";
import _addScript from "./supplements/_addScript";
import _removeScript from "./supplements/_removeScript";

export default class PlayState extends State {
    stage: PIXI.Container
    actorsGroup: any

    zoomX: number
    zoomY: number
    
    player: any
    target: any

    map: any

    scripts: any
    scene: boolean

    constructor() {
        super()

        this.stage = new PIXI.Container()
        this.actorsGroup = new PIXI.display.Group(0, true)
        this.actorsGroup.on('sort', (sprite: any) => {
            sprite.zOrder = sprite.instance.position.y
        });

        this.zoomX = 480 // 240
        this.zoomY = 270 // 135
        
        this.player = null
        this.target = null

        this.map = null

        this.scripts = []
        this.scene = false

    }

    pivot() {
        return _pivot(this)
    }

    resize() {
        return _resize(this, game.renderer.screen)
    }

    changeCamera(actor: any, zoom?: number) {
        return _changeCamera(this, actor, zoom)
        
    }

    zoomCamera(zoom: number) {
        return _zoomCamera(this, zoom)
    }

    checkPosition() {
        return _checkPosition(this, game.services)
    }

    changeMap(location: any) {
        return _changeMap(this, game, location)
    }

    interaction(actor: any, target: any) {
        return _interaction(this, game, actor, target)
    }

    playScripts() {
        return _playScripts(this)
    }

    addScript(script: any) {
        return _addScript(this, script)
    }

    removeScript(script: any) {
        return _removeScript(this, script)
    }



}
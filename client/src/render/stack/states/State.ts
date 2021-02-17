export default class State {
    stage: PIXI.Container

    constructor() {
        this.stage = new PIXI.Container()
        this.stage.visible = false

    }

    show() {
        this.stage.visible = true
    }

    hide() {
        this.stage.visible = false
    }
}
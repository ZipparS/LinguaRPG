export default class HUDelement {
    stage: PIXI.Container

    graphics: PIXI.Graphics

    width: number
    height: number

    constructor(width: number, height:number) {
        this.width = width
        this.height = height

        this.stage = new PIXI.Container()

        this.stage.width = this.width
        this.stage.height = this.height

        this.graphics = new PIXI.Graphics()
        this.graphics.beginFill(0xFFFF00)
        this.graphics.drawRect(0, 0, this.width, this.height)
        this.graphics.endFill()

        this.stage.addChild(this.graphics)
    }
}
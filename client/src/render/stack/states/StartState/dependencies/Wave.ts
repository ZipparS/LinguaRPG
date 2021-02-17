
export default class Wave {

    sprite: any

    x: number; y: number

    speed: number
    moving: number

    constructor(texture: any, i: number, randomizer: Function) {
        this.sprite = new PIXI.Sprite(texture)

        this.sprite.width = 300
        this.sprite.height = 300

        

        this.x = i*70 - 150
        this.y = 0

        this.speed = 0.05

        this.moving = randomizer(0, 50)

 

        
    }

    update(bottom: any) {

        this.moving += this.speed

        this.y += 0.1*Math.sin(this.moving)

        this.sprite.y = bottom - 50 + this.y
        this.sprite.x = this.x

    }
}
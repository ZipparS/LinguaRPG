export default class Particle {

    sprite: PIXI.Sprite

    size: number

    x:   number; y:   number
    vx:  number; vy:  number
    vxb: number

    gravity: number
    bounce:  number

    mode: number


    constructor(x: number, y: number, texture: any, size: number, posX: number, posY: number, randomizer: Function) {
        this.sprite = new PIXI.Sprite(texture)

        this.size = size

        this.x = posX + x
        this.y = posY + y

        this.sprite.width = this.sprite.height = this.size

        this.sprite.x = this.x
        this.sprite.y = this.y

        this.gravity = 0.6

        this.bounce = randomizer(-.7, -0.3)

        this.mode = 0

        this.vx = 0
        this.vy = 0

        this.vxb = randomizer(-2, 2)

        
    }

    update(bottom: number) {


        this.vy += this.gravity

        this.x += this.vx
        this.y += this.vy

        if(this.mode) {
            this.x += this.vxb
            // this.size = 30
            // this.sprite.width = this.sprite.height = this.size
        }

        if(this.y + this.size > bottom) {
            this.mode = 1
            this.y = bottom - this.size
            this.vy *= this.bounce
            



        }

        this.sprite.x = this.x
        this.sprite.y = this.y
    }

}
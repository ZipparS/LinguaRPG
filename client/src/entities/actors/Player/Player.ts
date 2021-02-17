

import Actor from "../Actor"

export default class Player extends Actor {

    constructor(player: any) {
        super(player)

        this.outline = new PIXI.OutlineFilter(2, 0xffffff)

        this.moving = false
        this.speed = 1
    }

    move(newCell: any) {
        if(newCell.y - this.cell.y === 1) this.direction = 'South'
        if(newCell.y - this.cell.y ===-1) this.direction = 'North'
        if(newCell.x - this.cell.x === 1) this.direction = 'East'
        if(newCell.x - this.cell.x ===-1) this.direction = 'West'

        this.moving = true
            this.target = {x: newCell.x * 16, y: newCell.y * 16}

            this.cell = newCell
      
            this.addScript({interpolation: () => this.interpolate()})

    }

    occupy(playState: any) {}

}
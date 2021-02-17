import { game } from "@index"

import Actor from "../Actor"

import { _up, _down, _left, _right } from "./supplements/moves"

export default class Hero extends Actor {
    location: string

    constructor(player: any) {
        super(player)

        this.outline = new PIXI.OutlineFilter(2, 0xffff00)

        this.location = player.location

        this.moving = false
        this.speed = 1
    }

    up() {
        return _up(this, game)
    }

    down() {
        return _down(this, game)
    }

    left() {
        return _left(this, game)
    }

    right() {
        return _right(this, game)
    }
}
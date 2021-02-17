import HUDelement from "../HUDelement";

export default class Character extends HUDelement {
    
    constructor(width: number, height: number) {
        super(width, height)

        this.stage.x = 0
        this.stage.y = 0

    }
}
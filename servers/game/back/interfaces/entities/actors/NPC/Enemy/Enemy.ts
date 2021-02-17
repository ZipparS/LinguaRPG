import Actor from "../../Actor";

export default class Enemy extends Actor {
    combat: object

    constructor(description: any, combat: object) {
        super(description)

        this.combat = combat


    }
}

export class Dialogue {

    constructor(dialogue: object) {

        return dialogue

    }
}
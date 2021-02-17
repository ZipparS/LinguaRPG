import Actor from "../../Actor";

export default class Friend extends Actor {
    dialogue: object

    constructor(description: any, dialogue: object) {
        super(description)

        this.dialogue = dialogue


    }
}

export class Dialogue {

    constructor(dialogue: object) {

        return dialogue

    }
}
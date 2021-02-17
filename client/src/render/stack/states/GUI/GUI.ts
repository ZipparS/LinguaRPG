import State from "../State";
import HUD from "./HUD/HUD";

export default class GUI extends State {

    HUD: HUD

    constructor() {
        super()

        this.HUD = new HUD()



        this.stage.addChild(this.HUD.stage)

    }

}
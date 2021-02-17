import HUDelement from "../HUDelement";

export default class Menu extends HUDelement {
    inventoryBtn: PIXI.Sprite
    questsBtn: PIXI.Sprite
    achivementsBtn: PIXI.Sprite
    menuBtn: PIXI.Sprite

    constructor(width: number, height: number) {
        super(width, height)

        this.inventoryBtn = new PIXI.Sprite()
        this.questsBtn = new PIXI.Sprite()
        this.achivementsBtn = new PIXI.Sprite()
        this.menuBtn = new PIXI.Sprite()
    }
}
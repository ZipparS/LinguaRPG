import { game } from "@index"

import State from "../../State"

import Character from "./bars/Character/Character"
import Chat from "./bars/Chat/Chat"
import Menu from "./bars/Menu/Menu"
import MiniMap from "./bars/MiniMap/MiniMap"

export default class HUD extends State {
    character: Character
    chat: Chat
    menu: Menu
    miniMap: MiniMap

    HUDswitcherBtn: any

    inventoryBtn: any
    questsBtn: any
    achivementsBtn: any
    menuBtn: any

    constructor() {
        super()

        this.stage.x = 0
        this.stage.y = 0

        this.stage.visible = true
        
        this.character   = new Character(300, 100)
        this.chat        = new Chat(500, 200)
        this.menu        = new Menu(500, 50)
        this.miniMap     = new MiniMap(200, 200)

        this.HUDswitcherBtn = new PIXI.Graphics()
        this.HUDswitcherBtn.beginFill(0xFF0000)
        this.HUDswitcherBtn.drawRect(0, 0, 36, 36)
        this.HUDswitcherBtn.endFill()
        this.HUDswitcherBtn.interactive = true
        this.HUDswitcherBtn.buttonMode = true

        this.HUDswitcherBtn.on('click', () => {
            this.character.stage.visible = !this.character.stage.visible
            this.chat.stage.visible = !this.chat.stage.visible
            this.menu.stage.visible = !this.menu.stage.visible
        })

        this.stage.addChild(this.character.stage)
        this.stage.addChild(this.chat.stage)
        this.stage.addChild(this.menu.stage)
        this.stage.addChild(this.miniMap.stage)
        this.stage.addChild(this.HUDswitcherBtn)

    }

    resize() {
        this.chat.stage.x = 0
        this.chat.stage.y = game.renderer.screen.height - this.chat.height

        this.menu.stage.x = game.renderer.screen.width - this.menu.width
        this.menu.stage.y = game.renderer.screen.height - this.menu.height

        this.miniMap.stage.x = game.renderer.screen.width - this.miniMap.width
        this.miniMap.stage.y = 0

        this.HUDswitcherBtn.x = game.renderer.screen.width - this.miniMap.width - 38
        this.HUDswitcherBtn.y = 2

      }

    build() {
        // stack.playState.stage.addChild(this.characterBar.stage)
        
        // stack.stage.addChild(this.stage)
        // this.show()

        
        // stack.playState.stage.addChild(this.chatBar.stage)
        // stack.playState.stage.addChild(this.menuBar.stage)

        // stack.playState.stage.addChild(this.HUDswitcherBtn)

        // this.show()
        // console.log('HUD')

    }

}

// HUD.build = function() {
//     console.log('123')
// }
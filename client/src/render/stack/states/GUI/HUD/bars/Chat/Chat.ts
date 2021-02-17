import HUDelement from "../HUDelement";

import commands from './commands'

export default class Chat extends HUDelement {
    input: PIXI.TextInput

    constructor(width: number, height: number) {
        super(width, height)

        this.input = new PIXI.TextInput({
            input: {
                fontSize: '18px',
                padding: '12px',
                width: '480px',
                color: '#26272E'
            },
            box: {
                default:  {fill: 0xE8E9F3, rounded: 0, stroke: {color: 0xCBCEE0, width: 0}},
                focused:  {fill: 0xE1E3EE, rounded: 0, stroke: {color: 0xABAFC6, width: 0}},
                disabled: {fill: 0xDBDBDB, rounded: 0}
            }
        })

        this.input.placeholder = 'Enter your Text...'
        this.input.x = 10
        this.input.y = 145

        this.stage.addChild(this.input)

        this.input.on('focus', () => {
            game.controller.chatFocused = true
        })

        this.input.on('blur', () => {
            game.controller.chatFocused = false
        })
        
    }

    send() {
        
        if(this.input.text[0] === '/') commands(this.input.text)
        else {
            console.log(this.input.text)
        }
        
        this.input.text = ''
    }
}
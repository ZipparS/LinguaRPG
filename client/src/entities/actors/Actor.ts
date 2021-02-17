import {game} from '@index'

import Entity from "../Entity";

import _pointerOver from "./supplements/_pointerOver";
import _pointerOut from "./supplements/_pointerOut";
import _interpolate from "./supplements/_interpolate";
import _navigate from './supplements/_navigate';
import _interact from './supplements/_interact';
import _addScript from "./supplements/_addScript";
import _removeScript from './supplements/_removeScript';
import _run from './supplements/_run';
import _walk from './supplements/_walk';
import getSpriteTextures from './supplements/getSpriteTextures';

export default class Actor extends Entity {
    //graphics        position
    textures: any;    target: any
    sprite: any;      
    portret: any;  
    outline: any   

    //animation-----------------------          
    moving: boolean;  animation: number
    speed: number;    direction: string

    //state
    isTarget: boolean;
    isChatting: boolean

    //scripts         
    scripts: any[];   

    constructor(data: any) {
        super(data)
        console.log(data)
        this.scripts = []
        this.textures = getSpriteTextures(data)
        
        this.sprite = new PIXI.Sprite(this.textures.standSouth)
        this.sprite.instance = this
        this.sprite.interactive = true
        this.sprite.buttonMode = true

        this.sprite.on('pointerover', () => this.pointerOver())
        this.sprite.on('pointerout', () => this.pointerOut())

        this.portret = new PIXI.Sprite(new PIXI.Texture(PIXI.utils.BaseTextureCache['male'], new PIXI.Rectangle(0, 0, 128, 128)))

        this.target = {
        x: this.position.x,
        y: this.position.y
        }
        
        this.moving = false
        this.speed = 1

        this.animation = 0
        this.direction = 'South'

        this.isTarget = false
        this.isChatting = false

    }

    

    pointerOver() {
        return _pointerOver(this)
    }

    pointerOut() {
        return _pointerOut(this)
    }

    interpolate() {
        return _interpolate(this, game.stack.playState)
    }

    navigate(end: any, action: any) {
        return _navigate(this, game.stack.playState, end, action)
    }

    interact(name: string) {
        return _interact(this, game.stack.playState, name)
    }

    addScript(script: any) {
        return _addScript(this, script)
    }

    removeScript(name: string) {
        return _removeScript(this, name)
    }

    run() {
        return _run(this)
    }

    walk() {
        return _walk(this)
    }

}
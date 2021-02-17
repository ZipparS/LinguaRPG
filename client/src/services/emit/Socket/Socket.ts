import { game } from "@index"

import GET_PLAYERS from "./messages/GET_PLAYERS"
import GET_NEW_PLAYER from "./messages/GET_NEW_PLAYER"
import PLAYER_MOVED from "./messages/PLAYER_MOVED"
import PLAYER_DISCONNECTED from "./messages/PLAYER_DISCONNECTED"

export default class Socket {
    players: any
    
    url: string | any

    API: WebSocket | any

    connected: boolean

    constructor() {
        this.players = {}

        this.url

        this.API

        this.connected = false

    }

    async open(url: string) {
        this.url = url
        
        this.API = await new WebSocket(this.url)    
        
        this.API.onmessage = (e: any) => this.onMessage(e.data)
        this.API.onopen = () => this.API.send(JSON.stringify({type: 'open', message: 'hello :)'}));

        this.connected = true
        
    }

    close() {
        this.connected = false
        this.API.close()
    }

    async onMessage(data: any) { 
        const { type, message } = JSON.parse(data)

        // if (type === 'action') {
            
        // } 

        if      (type === 'players') GET_PLAYERS (this, game.stack.playState, JSON.parse(data))
        
        else if (type === 'newPlayer') GET_NEW_PLAYER (this, game.stack.playState, JSON.parse(data))  
            
        else if (type === 'playerMoved') PLAYER_MOVED (this, game.stack.playState, JSON.parse(data))

        else if (type === 'playerDisconected') PLAYER_DISCONNECTED (this, game.stack.playState, JSON.parse(data))

    };
} 
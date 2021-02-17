import WebSocket from 'ws'
import {RedisClient} from 'redis'

export default class Socket {

    connections: any

    wss: WebSocket.Server

    constructor(server: any, pub: RedisClient, sub: RedisClient) {

        this.connections = {} 

        this.wss = new WebSocket.Server({ server })

        this.wss.on('connection', (ws: WebSocket) => {

            let connection: any

            ws.on('message', (data) => {
                pub.publish('ws:message', 'lol')
            })


            ws.on('close', () => {
                
            })
        })

    }
    
}

/*
Redis is a transferer, link between location-server and socket
*/

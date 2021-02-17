require('dotenv').config()
const PORT = process.env.PORT || 8080;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

import express from 'express'
import redis from 'redis'

import {resolve} from 'path'

const app = express();

app.use(express.static(resolve(__dirname, './public')))

app.get('/socket', (req: any, res: any) => {
    
})

const subscriber = redis.createClient(Number(REDIS_PORT))
const publisher  = redis.createClient(Number(REDIS_PORT))

const WS_CHANNEL = 'ws:message'

subscriber.on('message', (channel, message) => {
    console.log(`Message from: ${channel}, ${message}`)
})

subscriber.subscribe(WS_CHANNEL)

publisher.publish(WS_CHANNEL, 'my message')

/////////////////////////
 // SOCKETS







/////////////////////////




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} :)`);
});
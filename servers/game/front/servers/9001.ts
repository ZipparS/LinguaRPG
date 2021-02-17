import http from 'http'
import Socket from '../Socket'
import redis from 'redis'

const subscriber = redis.createClient(6379)
const publisher =  redis.createClient(6379)

const server = http.createServer()
const wss = new Socket(server, publisher, subscriber)


server.listen(9001)
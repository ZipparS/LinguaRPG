import Socket from "./Socket/Socket"


export default class EmitService {

    socket: Socket | undefined

    provider: any

    store:  any

    constructor(PORTS: any) {
        this.socket = new Socket()

        this.provider = 'kek'

        this.store  = 'lol'
    }

    log() {
        console.log(123)
    }
}
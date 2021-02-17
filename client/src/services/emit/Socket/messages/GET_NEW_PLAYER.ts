
import Player from '@/entities/actors/Player/Player'

export default function(socket: any, playState: any, data: any) {
    
    socket.players[data.message.name] = data.message
    console.log(data)

    let newPlayer = new Player(socket.players[data.message.name])
    newPlayer.sprite.parentGroup = playState.actorsGroup
    playState.map.actors.push(newPlayer)

    playState.stage.addChild(newPlayer.sprite)

    playState.resize()
    playState.pivot()
}


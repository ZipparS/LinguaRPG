export default function(socket: any, playState: any, data: any) {
    socket.players[data.message.name] = data.message

    
    let player = playState.map.actors.find((actor: any) => {
        return actor.name === data.message.name && actor.constructor.name === 'Player'
    })

    player.move(socket.players[data.message.name].cell)

    // playState

}
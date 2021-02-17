

export default function(socket: any, playState: any, data: any) {
    
    delete socket.players[data.message]

    let player = playState.map.actors.find((actor: any) => {
        return actor.name === data.message && actor.constructor.name === 'Player'
    })

    playState.stage.removeChild(player.sprite)

    playState.map.actors = playState.map.actors.filter((actor: any) => {
        return actor !== player
        
    })

    
            
}
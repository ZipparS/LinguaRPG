
import Player from '@/entities/actors/Player/Player'

export default function(players: any, playState: any, data: any) {
    players = data.message
            
            
    for (let player in players) {
        
        playState.map.actors.push(new Player(players[player]))
        
    }

    playState.stage.addChild(playState.map.layers.after)
    
    playState.map.actors.forEach((actor: any) => {
        console.log(actor)
        actor.sprite.parentGroup = playState.actorsGroup
        playState.stage.addChild(actor.sprite)

        actor.occupy(playState)
    })

    playState.stage.addChild(playState.map.layers.before)

    playState.resize()
    playState.pivot()
    
}

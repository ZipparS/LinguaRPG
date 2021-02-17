export default function(playState: any, game: any, actor: any, target: any) {
    if(target) {
        game.stack.chatState.dialogue(actor, target)
    } else {
        let {x,y} = actor.cell
        let direction: any
        let xOffset = actor.direction === 'East'  ? 1 : actor.direction === 'West'  ? -1 : 0
        let yOffset = actor.direction === 'South' ? 1 : actor.direction === 'North' ? -1 : 0
  
        xOffset === 1 ? direction = 'West'  : null; xOffset === -1 ? direction = 'East' : null;
        yOffset === 1 ? direction = 'North' : null; yOffset === -1 ? direction = 'South': null;
  
        playState.map.actors.forEach((target: any) => {
          if(target.cell.x === x + xOffset && target.cell.y === y + yOffset) {
            target.sprite.texture = target.textures[`stand${direction}`]
            game.stack.chatState.dialogue(actor, target)
          }
        })
  
        playState.map.items.forEach((item: any) => {
            if(item.cell.x === x + xOffset && item.cell.y === y + yOffset) {
                item.use()
            }
        })
  
    }
}
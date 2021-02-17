export function _up(hero: any, game: any) {
    if(hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return
    hero.sprite.texture = hero.textures.standNorth
    hero.direction = 'North'
    if(typeof game.stack.playState.map.collision[hero.cell.y - 1] !== 'undefined' 
        && game.stack.playState.map.collision[hero.cell.y - 1][hero.cell.x]) {
        
        hero.moving = true
        hero.target.y -= 16
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1
        hero.cell.y -= 1
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0

        game.services.emit.socket.API.send(JSON.stringify({
            type: 'move',
            newPosition: hero.cell
        }))

        hero.addScript({'interpolation': () => hero.interpolate()}) 
    }
}

export function _down(hero: any, game: any) {
    if(hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return
    hero.sprite.texture = hero.textures.standSouth
    hero.direction = 'South'
    if(typeof game.stack.playState.map.collision[hero.cell.y + 1] !== 'undefined' 
        && game.stack.playState.map.collision[hero.cell.y + 1][hero.cell.x]) {

        hero.moving = true
        hero.target.y += 16
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1
        hero.cell.y += 1
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0

        game.services.emit.socket.API.send(JSON.stringify({
            type: 'move',
            newPosition: hero.cell
        }))

        hero.addScript({'interpolation': () => hero.interpolate()})
    }
}

export function _left(hero: any, game: any) {
    if(hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return   
    hero.sprite.texture = hero.textures.standWest
    hero.direction = 'West'
    if(game.stack.playState.map.collision[hero.cell.y][hero.cell.x - 1]) {

        hero.moving = true
        hero.target.x -= 16
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1
        hero.cell.x -= 1
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0

        game.services.emit.socket.API.send(JSON.stringify({
            type: 'move',
            newPosition: hero.cell
        }))

        hero.addScript({'interpolation': () => hero.interpolate()})
    }
}

export function _right(hero: any, game: any) {
    if(hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return
    hero.sprite.texture = hero.textures.standEast
    hero.direction = 'East'
    if(game.stack.playState.map.collision[hero.cell.y][hero.cell.x + 1]) {
        hero.moving = true
        hero.target.x += 16
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1
        hero.cell.x += 1  
        game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0
        
        game.services.emit.socket.API.send(JSON.stringify({
            type: 'move',
            newPosition: hero.cell
        }))

      hero.addScript({'interpolation': () => hero.interpolate()})
    }
}
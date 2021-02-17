export default function(actor: any, playState: any) {
    let animationStep = 8
    
    let distX = actor.target.x - actor.position.x
    let distY = actor.target.y - actor.position.y
    let dx = Math.sign(distX) * actor.speed
    let dy = Math.sign(distY) * actor.speed

    if (Math.abs(distX) <= actor.speed && Math.abs(distY) <= actor.speed) {

        actor.sprite.texture = actor.textures[`stand${actor.direction}`]

        actor.position.x = actor.target.x
        actor.position.y = actor.target.y
        actor.moving = false

        if(actor.isTarget) {
            playState.pivot()
            playState.checkPosition()
        }

        else {
            actor.sprite.position.set(
                (window.innerWidth  / 2) + actor.position.x,
                (window.innerHeight / 2) + actor.position.y
            )
        }

        actor.removeScript('interpolation')

    } else {
      
        if((Math.abs(distX || distY) % animationStep) === 0) {
            actor.animation += 1
            actor.sprite.texture = actor.textures[`walk${actor.direction}`][actor.animation]
        }
        if(actor.animation > 3) {
            actor.animation = 0
            actor.sprite.texture = actor.textures[`walk${actor.direction}`][actor.animation]
        }

        actor.position.x += dx
        actor.position.y += dy

        if(!actor.isTarget) {
            actor.sprite.position.set(
                (window.innerWidth  / 2) + actor.position.x,
                (window.innerHeight / 2) + actor.position.y
            )
        }
      
    }
}
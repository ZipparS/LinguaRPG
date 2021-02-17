export default function(actor: any) {
    if(actor.position.x % 2 !== 0) actor.position.x += 1
    if(actor.position.y % 2 !== 0) actor.position.y += 1

    actor.speed = 2
}
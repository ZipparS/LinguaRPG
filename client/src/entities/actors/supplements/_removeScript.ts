export default function(actor: any, name: any) {
    actor.scripts = actor.scripts.filter((script: any) => Object.keys(script)[0] !== name)
}
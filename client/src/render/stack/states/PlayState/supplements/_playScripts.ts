export default function(playState: any) {
    for(let script of playState.scripts) {
        console.log(playState.scripts)
        script()
    }
}
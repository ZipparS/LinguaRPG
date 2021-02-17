export default function(playState: any, script: any) {
    playState.scripts.splice(playState.scripts.indexOf(script), 1)
}
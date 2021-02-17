export default class Entity {
    name: string

    // transparent: boolean

    texture: any
    textureX: any
    textureY: any

    cell: any
    position: any

    constructor(description: any) {
        this.name = description.name
        
        // this.transparent = description.transparent
        this.texture = description.texture
        this.textureX = description.textureX
        this.textureY = description.textureY

        this.cell = {
            x: description.cell.x,
            y: description.cell.y
        }

        this.position = {
            x: description.cell.x * 16,
            y: description.cell.y * 16
        }
    }

    occupy(playState: any) {
        // if (this.transparent) return
        playState.map.collision[this.cell.y][this.cell.x] = 0
    }
}
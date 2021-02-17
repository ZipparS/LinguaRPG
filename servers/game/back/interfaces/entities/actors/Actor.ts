export default class Actor {
    name: string

    area: object[] | object

    spriteTexture: {src: any,x: number,y: number}

    portretTexture: {src: any,x: number,y: number}

    constructor(description: any) {

        this.name = description.name

        this.area = description.area

        this.spriteTexture = description.spriteTexture

        this.portretTexture = description.portretTexture

    }
}
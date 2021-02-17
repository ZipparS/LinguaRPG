export default function(data: any) {
    
    let texture = PIXI.utils.BaseTextureCache[data.texture]
    let w = 26
    let h = 36
    let startX = data.textureX * w
    let startY = data.textureY * h

    return {
        standSouth: 
        new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 0), w, h)),
        standWest:  
        new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 1), w, h)),
        standEast:  
        new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 2), w, h)),
        standNorth: 
        new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 3), w, h)),

        walkSouth: [
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 0), startY + (h * 0), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 0), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 2), startY + (h * 0), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 0), w, h)),
        ],
        walkWest: [
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 0), startY + (h * 1), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 1), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 2), startY + (h * 1), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 1), w, h)),
        ],
        walkEast: [
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 0), startY + (h * 2), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 2), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 2), startY + (h * 2), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 2), w, h)),
        ],
        walkNorth: [
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 0), startY + (h * 3), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 3), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 2), startY + (h * 3), w, h)),
            new PIXI.Texture(texture, new PIXI.Rectangle(startX + (w * 1), startY + (h * 3), w, h)),
        ]
    }
}
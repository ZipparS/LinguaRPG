import Friend from "@/entities/actors/NPC/Friend/Friend"
import Enemy from "@/entities/actors/NPC/Enemy/Enemy"

export default function (storage: any) {
    return new Promise((resolve) => {
        for(let json in storage._maps) {
          

            let {name} = storage._maps[json]
            
            if(name in storage.locations) continue
            
            let map = JSON.parse(storage._maps[json].data)
            
         
            let props: any = {}
        
            if('properties' in map) {
                
                for(let property of map.properties) {
                    props[property.name] = property.value
                }

            }
        
            /* apply basic textures in proper order */
            let texturesArray: any[] = [null]
            for(let set of map.tilesets) {
                texturesArray = texturesArray.concat(storage.textures.landscape[set.source])
            }
        
        
            /* collision initialize */
            let collision: any[] = []
        
            for(let c = 0; c < map.height; c++) {
                collision[c] = []

                for(let r = 0; r < map.width; r++) {
                    collision[c][r] = 1
                }

            } 
        
            /* map layers initialization */
            let afterLayer = new PIXI.tilemap.CompositeRectTileLayer(16, texturesArray)
            let beforeLayer = new PIXI.tilemap.CompositeRectTileLayer(16, texturesArray)
        
            let objects: any = {
              adjacent: {},
              actors: []
            }
            
            /* drawing frames on map and register map objects */
            map.layers.filter((layer: any) => 'objects' in layer)
            .forEach((layer: any) => registerObject(layer, objects))
        
            map.layers.filter((layer: any) => 'data' in layer)
            .forEach((layer: any) => {
        
                let props: any = {}
            
                for(let property of layer.properties) {
                    props[property.name] = property.value
                }
        
                let temp = layer.name.includes('Before') ? beforeLayer : afterLayer
            
                for(let t = 0; t < layer.data.length; t++) {
            
                    if(layer.data[t]) {
            
                        let col = Math.floor(t / layer.width)
                        let row = t % layer.width
                
                        temp.addFrame(layer.data[t], row * map.tilewidth, col * map.tileheight)
                        
                        /* add collision */
                        if(props.collision) collision[col][row] = 0
            
                    }
                    
                }
            })
        
        
            /* cache map into "maps" object */
            storage.locations[name] = {
                layers: {
                    after: afterLayer,
                    before: beforeLayer
                },
                collision,
                size: {
                    w: map.width,
                    h: map.height
                },
                adjacent: objects.adjacent,
                actors: objects.actors,
                port: objects.port,
                lesson: props.lesson ? 'lesson' : null
            }
        }
        
        console.log('createLocations')
        return resolve()
    })
}

function registerObject(layer: any, objects: any) {
    const {name} = layer
    
    
    
    switch(name) {
      case 'locations': {
        for(let location of layer.objects) {
  
          let props: any = {}
  
          for(let property of location.properties) {
            props[property.name] = property.value
          }
  
  
          objects.adjacent[location.name] = {
            entry: {
              x: location.x / 16,
              y: location.y / 16
            },
            to: {
              x: props.cellX,
              y: props.cellY
            }
            
          }
        }
        break
      }
      case 'actors': {
        for(let actor of layer.objects) {
  
          let props: any = {}
  
          for(let property of actor.properties) {
            props[property.name] = property.value
          }
  
  
          let data = {
            name: actor.name,
            cell: {
              x: actor.x / 16,
              y: actor.y / 16
            }
          }
  
       
          props.type === 'friend'
  
          ? objects.actors.push(new Friend(Object.assign(data, props)))
          : objects.actors.push(new Enemy(Object.assign(data, props)))
        }
        break
      } case 'port': {
        // console.log(layer.objects)
        objects.port = 'ws://localhost:' + layer.objects
        // console.log(objects)
      }
    }
    
  }
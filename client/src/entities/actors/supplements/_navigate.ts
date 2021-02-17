export default function(actor: any, playState: any, end: any, action: any) {
    let {collision} = playState.map
    
    if(!collision[end.y][end.x]) return setTimeout(() => {
        actor.navigate(end, action)
    }, 1000) 

    let path = pathFinding(playState, actor.cell, end)

    actor.addScript({navigation: () => {
        if(actor.moving || actor.isChatting) return
                
        path!.shift()

        if(!path!.length) {
            actor.removeScript('navigation');
            return action ? action() : null
        }

        let step = path![0]
        if(step.x === end.x && step.y === end.y && collision[step.y][step.x] === 0) {
            return setTimeout(() => {
                actor.removeScript('navigation')
                actor.navigate(end, action)
            }, 1000)
        }
        
        if(step.y - actor.cell.y === 1) actor.direction = 'South'
        if(step.y - actor.cell.y ===-1) actor.direction = 'North'
        if(step.x - actor.cell.x === 1) actor.direction = 'East'
        if(step.x - actor.cell.x ===-1) actor.direction = 'West'

        if(collision[step.y][step.x] === 0) {
            
            path = pathFinding(playState, actor.cell, end)
        } else {
            actor.moving = true
            actor.target = {x: step.x * 16, y: step.y * 16}
    
            collision[actor.cell.y][actor.cell.x] = 1
            actor.cell = step
            collision[actor.cell.y][actor.cell.x] = 0
    
    
            actor.addScript({interpolation: () => actor.interpolate()})
        }

    }})
}



function pathFinding(playState: any, start: any, end: any) {
    let terrain = playState.map.collision
  
    class Node {
      parent: any
      x: number
      y: number
  
      g: number; h: number; f: number
      constructor(coordinate: any, parent: any = null) {
        this.parent = parent
  
        this.x = coordinate.x
        this.y = coordinate.y
  
        this.g = 0
        this.h = 0
        this.f = 0
      }
    }
  
    let openSet = [new Node(start)]
    let closedSet = []
  
    while(openSet.length) {
      let current = openSet[0]
  
      for(let i = 0; i < openSet.length; i++) {
        if(openSet[i].f < current.f) {
          current = openSet[i]
        }
      }
  
      openSet = openSet.filter(nodes => nodes !== current)
      closedSet.push(current)
  
      if(current.x === end.x
      && current.y === end.y) {
        let path = []
        while (current) {
          path.push({x: current.x, y: current.y})
          current = current.parent
        }
        return path.reverse()
      }
  
      let neighbors = []
  
      for(let direction of [{x: 0, y: -1}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 1, y: 0}]) {
  
        let nodePosition = {x: current.x + direction.x, y: current.y + direction.y}
  
        if((terrain[nodePosition.y] !== undefined && terrain[nodePosition.y][nodePosition.x] !== undefined)
        && (terrain[nodePosition.y][nodePosition.x] && !closedSet.includes(new Node(nodePosition, current)))) {
  
          let neighbor = new Node(nodePosition, current)
          neighbors.push(neighbor)
  
        }
      }
  
      for(let neighbor of neighbors) {
  
        if(!closedSet.includes(neighbor)) {
          neighbor.g = current.g + 1
          neighbor.h = ((neighbor.x - end.x)**2) + ((neighbor.y - end.y)** 2)
          neighbor.f = neighbor.g + neighbor.h
  
        }
        
        for(let node of openSet) {
          if(neighbor === node && neighbor.g > node.g) {
            break
          }
        }
  
        openSet.push(neighbor)
      }
  
      
    }
    
  }
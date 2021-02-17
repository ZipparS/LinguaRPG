import { game } from '@index'

export default function bindKeys() {
    // hold
    game.controller.shift.on  = () => game.stack.playState.player.run()
    game.controller.shift.off = () => game.stack.playState.player.walk()
  
  
    // press
    game.controller.space.on = () => game.stack.playState.target.interact()
  
    game.controller.i.on = () => {
      game.stack.inventory.toggle()
      if(game.stack.inventory.stage.visible) game.stack.playState.windows.push(game.stack.inventory)
      else game.stack.playState.windows = game.stack.playState.windows.filter((window: any) => window !== game.stack.inventory)
    }
  
    game.controller.p.on = () => {
      game.stack.peronage.toggle()
      if(game.stack.peronage.stage.visible) game.stack.playState.windows.push(game.stack.peronage)
      else game.stack.playState.windows = game.stack.playState.windows.filter((window: any) => window !== game.stack.peronage)
    }
  
    game.controller.j.on = () => {
      game.stack.journal.toggle()
      if(game.stack.journal.stage.visible) game.stack.playState.windows.push(game.stack.journal)
      else game.stack.playState.windows = game.stack.playState.windows.filter((window: any) => window !== game.stack.journal)
    }
    game.controller.m.on = () => {
      game.stack.map.toggle()
      if(game.stack.map.stage.visible) game.stack.playState.windows.push(game.stack.map)
      else game.stack.playState.windows = game.stack.playState.windows.filter((window: any) => window !== game.stack.map)
    }
  
    game.controller.esc.on = () => {
      console.log(game.stack.playState.windows)
      if(game.stack.playState.windows.length) {
        game.stack.playState.windows[game.stack.playState.windows.length - 1].hide()
        game.stack.playState.windows.pop()
      } else game.stack.menu.toggle()
    }
  
  
  }
  
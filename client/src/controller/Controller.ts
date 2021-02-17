import { game } from "@index";

export default class Controller {

    chatFocused: boolean

    left: any; right: any; up: any; down: any

    shift: any

    space: any

    i: any; p: any; j: any; m: any;

    esc: any

    constructor() {
      this.chatFocused = false

      this.up    = new ButtonInput()
      this.down  = new ButtonInput()
      this.left  = new ButtonInput()
      this.right = new ButtonInput()

      this.shift = new ButtonInput()
      this.space = new ButtonInput()

      this.i     = new ButtonInput()
      this.p     = new ButtonInput()
      this.j     = new ButtonInput()
      this.m     = new ButtonInput()
      this.esc   = new ButtonInput()
  }

  keyDownUp(event: any) {
    let {type, keyCode} = event

    if(this.chatFocused) {
      if(keyCode === 13) game.stack.GUI.chatBar.send(); 
      return
    }
    
    // console.log(keyCode)
    let down = (type == "keydown") ? true : false
    // console.log(keyCode)
    
    if(keyCode === 38 || keyCode === 87) this.up.getInput(down);
    if(keyCode === 40 || keyCode === 83) this.down.getInput(down);
    if(keyCode === 37 || keyCode === 65) this.left.getInput(down);
    if(keyCode === 39 || keyCode === 68) this.right.getInput(down);

    switch(keyCode) {

      case 16: this.shift.hold(down);     break

      case 32: this.space.press(down);    break


      // interface
      case 73: this.i.press(down);        break
      case 80: this.p.press(down);        break
      case 74: this.j.press(down);        break
      case 77: this.m.press(down);        break
      case 27: this.esc.press(down);      break
    }


    
  }

  bindKeys(){}
}

class ButtonInput {
    active: boolean; down: boolean
  
    on: any
    off: any
    constructor() {
      this.active = this.down = false;
  
      this.on  = null
      this.off = null
    }
  
    getInput (down: any) {
  
      if (this.down != down) this.active = down;
      this.down = down;
  
    }
  
    toggle (down: any) {
      this.getInput(down)
  
      this.on()
    }
  
    hold (down: any) {
      this.getInput(down)
  
      if(this.active) this.on()
      if(!this.active) this.off()
    }
  
    press (down: any) {
      if(down) this.on()
    }
  
}

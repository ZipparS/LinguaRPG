import Actor from "../../Actor";


export default class Enemy extends Actor {
  constructor(data:any) {
    super(data)

    this.outline = new PIXI.OutlineFilter(2, 0xff0000);

    

  }

  
}
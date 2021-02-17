import Actor from "../../Actor";

export default class Friend extends Actor {
  
  
    lines: object[]
  
    constructor(data:any) {
      super(data)
  
      this.outline = new PIXI.OutlineFilter(2, 0x99ff99);
    
      this.lines = []
  
      // this.lines = [
      //   {m: 'Hi son!'},
      //   {question: "You're already grown. Are you sure you gonna went to China?", answers: [
      //     {m: "Father. I do. That is my passion", next: 'yes'},
      //     {m: "There is no way i declain my dream", next: 'yes'}
      //   ]},
      //   {label: 'yes', m: "I proud of you. Get this, son."},
      //   {m: "Me, with you'r mom loves you"}
      // ]
  
      this.sprite.on('rightclick', () => this.click())
      
    }
  
    click() {
      
      console.log('clicked')
    }
  
  }
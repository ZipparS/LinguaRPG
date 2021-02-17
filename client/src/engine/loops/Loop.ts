export default class Loop {
  name: string
  scripts: any[]

  
  constructor() {
    this.name = this.constructor.name
    this.scripts = []

    this.loop = this.loop.bind(this)
  }

  implement(fn: Function, id: string) {
    fn.id = id
    this.scripts.push(fn)
  }

  remove(id: string) {
    this.scripts = this.scripts.filter((script: Function) => script.id !== id)
  }



  loop() {}

}
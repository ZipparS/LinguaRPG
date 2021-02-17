import * as OPTIONS from '@/config'

import Renderer from '@/render/Renderer'
import StateStack from '@/render/stack/Stack'
import Engine from '@/engine/Engine'
import Controller from '@/controller/Controller'
import Services from '@/services/Services'


export default class Game {

  $canvas: HTMLCanvasElement


  /* PIXI Renderer */// -----------------------------------
  renderer: Renderer

  /* Game stack */// -----------------------------------
  stack: StateStack

  /* Frames generator */// -----------------------------------
  engine: Engine

  /* Controller */// -----------------------------------
  controller: Controller

  /* Services */// -----------------------------------
  services: Services

  constructor(selector: string) {

    this.$canvas = <HTMLCanvasElement>document.querySelector(selector)


    this.renderer   = new Renderer(this.$canvas)
    
    this.stack      = new StateStack(this.renderer)

    this.engine     = new Engine()
    
    this.controller = new Controller()

    this.services   = new Services(OPTIONS)

  }

  async setup() {

    window.addEventListener('resize', () => this.renderer.resize())

    this.engine.add(this.engine.loops.preview.loop)
    this.engine.start()


    // await new Promise((resolve) => {setTimeout(() => {resolve()}, 2000)})
    await this.services.setup.loadPlayer()
    // await new Promise((resolve) => {setTimeout(() => {
    //   this.services.status.setupProgress += 20
    //   resolve()
    // }, 1000)})
    
    await this.services.setup.loadTilesets(OPTIONS.DEFAULT_ASSETS)
    // await new Promise((resolve) => {setTimeout(() => {
    //   this.services.status.setupProgress += 20
    //   resolve()
    // }, 1000)})
    
    await this.services.setup.loadMaps()
    // await new Promise((resolve) => {setTimeout(() => {
    //   this.services.status.setupProgress += 20
    //   resolve()
    // }, 1000)})
    
    await this.services.setup.createTextures()
    // await new Promise((resolve) => {setTimeout(() => {
    //   this.services.status.setupProgress += 20
    //   resolve()
    // }, 1000)})
    
    await this.services.setup.createLocations()
    // await new Promise((resolve) => {setTimeout(() => {
    //   this.services.status.setupProgress += 20
    //   resolve()
    // }, 1000)})
    // await new Promise((resolve) => {setTimeout(() => {resolve()}, 2000)})

    await this.services.setup.getSocket()
    

    await this.services.setup.build()
    
  }

}

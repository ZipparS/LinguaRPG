import { game } from "@index";

import State from "../State";

import droplet from "./assets/droplet.png"

import Particle from "./dependencies/Particle";
import Wave from "./dependencies/Wave";

export default class StartState extends State {

    stackRef: any
    
    elevator: PIXI.Graphics

    texture: PIXI.Texture
    textureSize: number

    characters: string[]

    drops: Particle[]
    waves: Wave[]

    progress: number
    bottom: number

    box: PIXI.Sprite

    constructor(stack: any, renderer: any) {
        super()

        this.stackRef = stack

        this.stage = new PIXI.ParticleContainer(1000)

        this.elevator = new PIXI.Graphics()
        
        
        renderer.screen.generateTexture(this.elevator)

        
        

        this.texture = PIXI.Texture.from(droplet)
        this.textureSize = 24

        this.characters = ['A', 'H', 'E', 'O', 'L', 'F', 'R', 'Y', 'U', 'P', 'K']

        this.drops = []
        this.waves = []


        this.progress = 0
        this.bottom = window.innerHeight - ((this.progress * window.innerHeight) / 100)

        this.elevator.beginFill(0xFFFF00)
        this.elevator.drawRect(100, 100, 100, 100)
        this.elevator.endFill()



        this.addFilters()
        
        this.generateWave()

        // this.box = new PIXI.Sprite(renderer.screen.generateTexture(this.elevator))
        
        // this.stage.addChild(this.box)
        
        

        setInterval(() => {
            // this.progress += 3
            // this.bottom = window.innerHeight - ((this.progress * window.innerHeight) / 100)
            this.generateLetter()
            
        }, 300)

    }

    randomizer(min: number, max: number) {
        return min + (max - min)*Math.random()
    }

    generateLetter() {
        let letter = this.characters[Math.round(Math.random()*this.characters.length)]

        let leon = new LeonSans({
            text: letter,
            color: ['#000000'],
            size: 200,
            weight: 10,
            isPath: true,
            tracking: 5
        });

        let posX = this.randomizer(0, window.innerWidth - 150)
        let posY = this.randomizer(-100, 100)

        leon.paths.forEach((point: any) => {
            let particle = new Particle(
                point.x, point.y, 
                this.texture, 
                this.textureSize, 
                posX, posY,
                this.randomizer
            )
            this.drops.push(particle)
            this.stage.addChild(particle.sprite)
        })
    }

    generateWave() {
        for(let i = 0; i < (window.screen.availWidth / 300) * 5; i++) {
            let wave = new Wave(this.texture, i, this.randomizer)
            this.waves.push(wave)
            this.stage.addChild(wave.sprite)
        }
    }

    addFilters() {
        let blurFilter = new PIXI.filters.BlurFilter()
        blurFilter.blur = 15

        let shader = `varying vec2 vTextureCoord;

        uniform sampler2D uSampler;
        
        void main(void){
            vec4 color = texture2D(uSampler, vTextureCoord);
            if(color.a>0.3) {
                gl_FragColor = vec4(1.,1.,1.,1.);
            } else {
                gl_FragColor = vec4(0.,0.,0.,1.);
            }
            // gl_FragColor = texture2D(uSampler, vTextureCoord);
           
        }`
        let threasholdFilter = new PIXI.Filter(undefined, shader, {})


        this.stackRef.stage.filters = [blurFilter, threasholdFilter]

    }

    interpolateProgress() {
        if(this.progress !== game.services.status.setupProgress) {
            this.progress += .5
            this.bottom = window.innerHeight - ((this.progress * window.innerHeight) / 100)
        }
    }

    resize() {
        this.progress = game.services.status.setupProgress
        this.bottom = window.innerHeight - ((game.services.status.setupProgress * window.innerHeight) / 100)
    }


}
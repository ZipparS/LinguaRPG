import FilterState from './states/FilterState/FilterState'
import StartState from './states/StartState/StartState'
import ChatState from './states/ChatState/ChatState'
import BattleState from './states/BattleState/BattleState'
import PlayState from './states/PlayState/PlayState'
import GUI from './states/GUI/GUI'


export default class StateStack {
    stage: PIXI.display.Stage

    playState: PlayState
    GUI: GUI
    
    chatState: ChatState
    battleState: BattleState
    
    startState: StartState

    filterState: FilterState

    constructor(renderer: any) {
        // Main stage that includes every scene
        this.stage = new PIXI.display.Stage()
        this.stage.sortableChildren = true
        this.stage.filterArea = renderer.screen.screen

        this.playState      = new PlayState()
        this.GUI            = new GUI()
        
        this.chatState      = new ChatState()
        this.battleState    = new BattleState()
        
        this.startState     = new StartState(this, renderer)
        
        this.filterState    = new FilterState()

        this.stage.addChild(this.playState.stage)
        this.stage.addChild(this.GUI.stage)

        this.stage.addChild(this.battleState.stage)
        this.stage.addChild(this.chatState.stage)

        this.stage.addChild(this.startState.stage)

        this.stage.addChild(this.filterState.stage)

    }

    
}
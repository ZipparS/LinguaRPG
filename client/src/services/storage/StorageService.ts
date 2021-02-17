export default class StorageService {
        
        player: any

        textures: any
        locations: any
        
        _tilesets: any
        _maps: any

        
    constructor() {

        this.player
  
        this._maps = {}
        this.locations = {}

        this._tilesets = {
            landscape: {},
            animated: {},
            actors: {},
            portrets: {}
        } 
        
        this.textures = {
            landscape: {},
            animated: {},
            actors: {},
            portrets: {}
        }
        
    }

    getRaw() {
        return {
            player: this.player,
            tilesets: this._tilesets,
            maps: this._maps
        }
    }

    getProcessed() {
        return {
            player: this.player,
            textures: this.textures,
            locations: this.locations
        }
    }
}
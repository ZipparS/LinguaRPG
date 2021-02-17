import {game} from '@index'

import _loadPreviewAsset from './supplements/_loadPreviewAsset'

import _loadPlayer from './supplements/_loadPlayer'
import _loadTilesets from './supplements/_loadTilesets'
import _loadMaps from './supplements/_loadMaps'

import _createTextures from './supplements/_createTextures'
import _createLocations from './supplements/_createLocations'

import _build from './supplements/_build'



export default class SetupService {

    static loader = () => new PIXI.Loader()
    
    static xhrTypes = {
        JSON: PIXI.LoaderResource.XHR_RESPONSE_TYPE.JSON,
        BLOB: PIXI.LoaderResource.XHR_RESPONSE_TYPE.BLOB
    }
    
    options: any

    constructor(options: any) {
        
        this.options = options
        
    }

    loadPreviewAsset() {
        return _loadPreviewAsset(
            SetupService.loader(),
            SetupService.xhrTypes, 
            game.services.storage
        )
    }

    loadPlayer() {
        return _loadPlayer(
            SetupService.loader(), 
            SetupService.xhrTypes, 
            game.services.storage,
            this.options
        )
    }
        
    loadTilesets(tilesets: any[]) {
        return _loadTilesets(
            SetupService.loader(), 
            SetupService.xhrTypes, 
            game.services.storage, 
            this.options,
            tilesets
        )
    }

    // loadCharacters() {}

    // loadPortrets() {}

    loadMaps(maps: any[] = game.services.storage.player.adjacentMaps) {
        return _loadMaps(
            SetupService.loader(),
            SetupService.xhrTypes,
            game.services.storage,
            this.options,
            maps
        )
    }

    createTextures() {
        return _createTextures(
            game.services.storage
        )
    }

    createLocations() {
        return _createLocations(
            game.services.storage
        )
    }

    getSocket() {
        return _getSocket(
            game.services.emit
        )
    }


    build() {
        return _build(game)
    }

}
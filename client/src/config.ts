export const PORTS = {
    GAME: 8080,
    PROVIDER: 1111,
    STORE: 5000
}
 
export const GAME_OPTIONS = {
    landscape:  { w: 16,  h: 16  },
    animated:   { w: 16,  h: 16  },
    portrets:   { w: 128, h: 128 },
    actors:     { w: 26,  h: 36  },
}

export const DEFAULT_ASSETS = [
    {tag: 'terrain', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/terrain`},
    {tag: 'outside', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/outside`},
    {tag: 'world', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/world`},
    {tag: 'water', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/water`},
    {tag: 'desert', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/desert`},
    {tag: 'house', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/house`},
    {tag: 'castle', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/castle`},
    {tag: 'dungeon', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/dungeon`},
    {tag: 'inside', url: `http://localhost:${PORTS.PROVIDER}/tilesets/landscape/inside`},

    {tag: 'doors', url: `http://localhost:${PORTS.PROVIDER}/tilesets/animated/doors`},
    {tag: 'fireplace', url: `http://localhost:${PORTS.PROVIDER}/tilesets/animated/fireplace`},
    {tag: 'torch', url: `http://localhost:${PORTS.PROVIDER}/tilesets/animated/torch`},
    {tag: 'puzzle', url: `http://localhost:${PORTS.PROVIDER}/tilesets/animated/puzzle`},

    {tag: 'fat', url: `http://localhost:${PORTS.PROVIDER}/tilesets/actors/fat`},

    
    {tag: 'male', url: `http://localhost:${PORTS.PROVIDER}/tilesets/portrets/male`},
    {tag: 'female', url: `http://localhost:${PORTS.PROVIDER}/tilesets/portrets/female`},
    {tag: 'mutual', url: `http://localhost:${PORTS.PROVIDER}/tilesets/portrets/mutual`},
]
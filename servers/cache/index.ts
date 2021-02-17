import express from 'express'
import cors from 'cors'
require('dotenv').config()

const app = express()

app.use(cors())

function adjacent(location: string) {
    let adjacentArray: any = []
    switch (location) {
      case 'start': adjacentArray = ['HSK1']; break
      case 'HSK1': adjacentArray = ['start', 'HSK2', 'lesson1']; break
      case 'HSK2': adjacentArray = ['HSK1']; break
      case 'lesson1': adjacentArray = ['HSK1']; break
      case 'test': adjacentArray = ['start']; break
    }
  
    return adjacentArray
  }
  
  const player = {
    name: 'ZipparS',
    location: 'start',
    texture: 'fat',
    textureX: 3,
    textureY: 0,
    adjacentMaps: ['start', ...adjacent('start')],
    cell: {
      x: 5,
      y: 5
    }
  }
  

app.get('/player', (req, res) => res.json(player))


// static assets
app.get('/tilesets/landscape/terrain', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/terrain.png'))
app.get('/tilesets/landscape/outside', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/outside.png'))
app.get('/tilesets/landscape/world', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/world.png'))
app.get('/tilesets/landscape/water', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/water.png'))
app.get('/tilesets/landscape/desert', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/desert.png'))
app.get('/tilesets/landscape/house', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/house.png'))
app.get('/tilesets/landscape/castle', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/castle.png'))
app.get('/tilesets/landscape/dungeon', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/dungeon.png'))
app.get('/tilesets/landscape/inside', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/inside.png'))

// animated assets
app.get('/tilesets/animated/doors', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/doors.png'))
app.get('/tilesets/animated/fireplace', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/fireplace.png'))
app.get('/tilesets/animated/torch', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/torch.png'))
app.get('/tilesets/animated/puzzle', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/puzzle.png'))

// characters
app.get('/tilesets/actors/fat', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/actors/fat.png'))

// portrets
app.get('/tilesets/portrets/male', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/male.png'))
app.get('/tilesets/portrets/female', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/female.png'))
app.get('/tilesets/portrets/mutual', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/mutual.png'))
app.get('/tilesets/portrets/portrets', (req, res) => res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/portrets.png'))

// maps
app.get('/maps/start', (req, res) => res.sendFile(__dirname + '/src/maps/start.json'))
app.get('/maps/HSK1', (req, res) => res.sendFile(__dirname + '/src/maps/HSK1.json'))
app.get('/maps/lesson1', (req, res) => res.sendFile(__dirname + '/src/maps/lesson1.json'))
app.get('/maps/HSK2', (req, res) => res.sendFile(__dirname + '/src/maps/HSK2.json'))
app.get('/maps/test', (req, res) => res.sendFile(__dirname + '/src/maps/test.json'))

// lessons
app.get('/lessons/modal', (req, res) => res.sendFile(__dirname + '/src/assets/lessons/modal.png'))

app.listen(
    process.env.PORT, 
    () => console.log(
        `static server is listening on ${process.env.PORT}`
    )
)


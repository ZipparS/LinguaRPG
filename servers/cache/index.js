"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
var app = express_1.default();
app.use(cors_1.default());
function adjacent(location) {
    var adjacentArray = [];
    switch (location) {
        case 'start':
            adjacentArray = ['HSK1'];
            break;
        case 'HSK1':
            adjacentArray = ['start', 'HSK2', 'lesson1'];
            break;
        case 'HSK2':
            adjacentArray = ['HSK1'];
            break;
        case 'lesson1':
            adjacentArray = ['HSK1'];
            break;
        case 'test':
            adjacentArray = ['start'];
            break;
    }
    return adjacentArray;
}
var player = {
    name: 'ZipparS',
    location: 'start',
    texture: 'fat',
    textureX: 3,
    textureY: 0,
    adjacentMaps: __spreadArrays(['start'], adjacent('start')),
    cell: {
        x: 5,
        y: 5
    }
};
app.get('/player', function (req, res) { return res.json(player); });
// static assets
app.get('/tilesets/landscape/terrain', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/terrain.png'); });
app.get('/tilesets/landscape/outside', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/outside.png'); });
app.get('/tilesets/landscape/world', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/world.png'); });
app.get('/tilesets/landscape/water', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/water.png'); });
app.get('/tilesets/landscape/desert', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/desert.png'); });
app.get('/tilesets/landscape/house', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/house.png'); });
app.get('/tilesets/landscape/castle', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/castle.png'); });
app.get('/tilesets/landscape/dungeon', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/dungeon.png'); });
app.get('/tilesets/landscape/inside', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/inside.png'); });
// animated assets
app.get('/tilesets/animated/doors', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/doors.png'); });
app.get('/tilesets/animated/fireplace', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/fireplace.png'); });
app.get('/tilesets/animated/torch', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/torch.png'); });
app.get('/tilesets/animated/puzzle', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/landscape/animated/puzzle.png'); });
// characters
app.get('/tilesets/actors/fat', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/actors/fat.png'); });
// portrets
app.get('/tilesets/portrets/male', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/male.png'); });
app.get('/tilesets/portrets/female', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/female.png'); });
app.get('/tilesets/portrets/mutual', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/mutual.png'); });
app.get('/tilesets/portrets/portrets', function (req, res) { return res.sendFile(__dirname + '/src/assets/tilesets/actors/portrets/portrets.png'); });
// maps
app.get('/maps/start', function (req, res) { return res.sendFile(__dirname + '/src/maps/start.json'); });
app.get('/maps/HSK1', function (req, res) { return res.sendFile(__dirname + '/src/maps/HSK1.json'); });
app.get('/maps/lesson1', function (req, res) { return res.sendFile(__dirname + '/src/maps/lesson1.json'); });
app.get('/maps/HSK2', function (req, res) { return res.sendFile(__dirname + '/src/maps/HSK2.json'); });
app.get('/maps/test', function (req, res) { return res.sendFile(__dirname + '/src/maps/test.json'); });
// lessons
app.get('/lessons/modal', function (req, res) { return res.sendFile(__dirname + '/src/assets/lessons/modal.png'); });
app.listen(process.env.PORT, function () { return console.log("static server is listening on " + process.env.PORT); });
//# sourceMappingURL=index.js.map
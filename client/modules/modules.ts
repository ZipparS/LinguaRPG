// PIXI with its dependencies
import * as PIXI from 'pixi.js'
import {OutlineFilter} from '@pixi/filter-outline';
window.PIXI = PIXI
window.PIXI.OutlineFilter = OutlineFilter

require("pixi-tilemap");
require("pixi-layers")
require("pixi-text-input")

import LeonSans from '@nindaff/leonsans'
window.LeonSans = LeonSans

//UTILS
window.utils = {}
window.utils.randomizer = (min: number, max: number) => min + (max - min)*Math.random()

// stylesheet
import '@/style.scss'
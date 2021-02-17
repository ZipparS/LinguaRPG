/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules */ "./modules/modules.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Game */ "./src/Game.ts");
 // Disable interpolation when scaling, will make texture be pixelated

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.ROUND_PIXELS = true; // "1.000.000 < tiles" possibility

PIXI.tilemap.Constant.use32bitIndex = true;

var game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"]('#canvas');
game.setup();

/***/ }),

/***/ "./modules/modules.ts":
/*!****************************!*\
  !*** ./modules/modules.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _pixi_filter_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/filter-outline */ "./node_modules/@pixi/filter-outline/lib/filter-outline.esm.js");
/* harmony import */ var _nindaff_leonsans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nindaff/leonsans */ "./node_modules/@nindaff/leonsans/src/leonsans.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
// PIXI with its dependencies


window.PIXI = pixi_js__WEBPACK_IMPORTED_MODULE_0__;
window.PIXI.OutlineFilter = _pixi_filter_outline__WEBPACK_IMPORTED_MODULE_1__["OutlineFilter"];

__webpack_require__(/*! pixi-tilemap */ "./node_modules/pixi-tilemap/dist/pixi-tilemap.js");

__webpack_require__(/*! pixi-layers */ "./node_modules/pixi-layers/dist/pixi-layers.js");

__webpack_require__(/*! pixi-text-input */ "./node_modules/pixi-text-input/PIXI.TextInput.js");


window.LeonSans = _nindaff_leonsans__WEBPACK_IMPORTED_MODULE_2__["default"]; //UTILS

window.utils = {};

window.utils.randomizer = function (min, max) {
  return min + (max - min) * Math.random();
}; // stylesheet




/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ "./src/config.ts");
/* harmony import */ var _render_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/render/Renderer */ "./src/render/Renderer.ts");
/* harmony import */ var _render_stack_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/render/stack/Stack */ "./src/render/stack/Stack.ts");
/* harmony import */ var _engine_Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/engine/Engine */ "./src/engine/Engine.ts");
/* harmony import */ var _controller_Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/controller/Controller */ "./src/controller/Controller.ts");
/* harmony import */ var _services_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Services */ "./src/services/Services.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Game = /*#__PURE__*/function () {
  /* PIXI Renderer */
  // -----------------------------------

  /* Game stack */
  // -----------------------------------

  /* Frames generator */
  // -----------------------------------

  /* Controller */
  // -----------------------------------

  /* Services */
  // -----------------------------------
  function Game(selector) {
    _classCallCheck(this, Game);

    _defineProperty(this, "$canvas", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "stack", void 0);

    _defineProperty(this, "engine", void 0);

    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "services", void 0);

    this.$canvas = document.querySelector(selector);
    this.renderer = new _render_Renderer__WEBPACK_IMPORTED_MODULE_1__["default"](this.$canvas);
    this.stack = new _render_stack_Stack__WEBPACK_IMPORTED_MODULE_2__["default"](this.renderer);
    this.engine = new _engine_Engine__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.controller = new _controller_Controller__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.services = new _services_Services__WEBPACK_IMPORTED_MODULE_5__["default"](_config__WEBPACK_IMPORTED_MODULE_0__);
  }

  _createClass(Game, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.addEventListener('resize', function () {
                  return _this.renderer.resize();
                });
                this.engine.add(this.engine.loops.preview.loop);
                this.engine.start(); // await new Promise((resolve) => {setTimeout(() => {resolve()}, 2000)})

                _context.next = 5;
                return this.services.setup.loadPlayer();

              case 5:
                _context.next = 7;
                return this.services.setup.loadTilesets(_config__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ASSETS"]);

              case 7:
                _context.next = 9;
                return this.services.setup.loadMaps();

              case 9:
                _context.next = 11;
                return this.services.setup.createTextures();

              case 11:
                _context.next = 13;
                return this.services.setup.createLocations();

              case 13:
                _context.next = 15;
                return this.services.setup.build();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: PORTS, GAME_OPTIONS, DEFAULT_ASSETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTS", function() { return PORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_OPTIONS", function() { return GAME_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ASSETS", function() { return DEFAULT_ASSETS; });
var PORTS = {
  GAME: 8080,
  PROVIDER: 1111,
  STORE: 5000
};
var GAME_OPTIONS = {
  landscape: {
    w: 16,
    h: 16
  },
  animated: {
    w: 16,
    h: 16
  },
  portrets: {
    w: 128,
    h: 128
  },
  actors: {
    w: 26,
    h: 36
  }
};
var DEFAULT_ASSETS = [{
  tag: 'terrain',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/terrain")
}, {
  tag: 'outside',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/outside")
}, {
  tag: 'world',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/world")
}, {
  tag: 'water',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/water")
}, {
  tag: 'desert',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/desert")
}, {
  tag: 'house',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/house")
}, {
  tag: 'castle',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/castle")
}, {
  tag: 'dungeon',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/dungeon")
}, {
  tag: 'inside',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/landscape/inside")
}, {
  tag: 'doors',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/animated/doors")
}, {
  tag: 'fireplace',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/animated/fireplace")
}, {
  tag: 'torch',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/animated/torch")
}, {
  tag: 'puzzle',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/animated/puzzle")
}, {
  tag: 'fat',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/actors/fat")
}, {
  tag: 'male',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/portrets/male")
}, {
  tag: 'female',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/portrets/female")
}, {
  tag: 'mutual',
  url: "http://localhost:".concat(PORTS.PROVIDER, "/tilesets/portrets/mutual")
}];

/***/ }),

/***/ "./src/controller/Controller.ts":
/*!**************************************!*\
  !*** ./src/controller/Controller.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    _defineProperty(this, "chatFocused", void 0);

    _defineProperty(this, "left", void 0);

    _defineProperty(this, "right", void 0);

    _defineProperty(this, "up", void 0);

    _defineProperty(this, "down", void 0);

    _defineProperty(this, "shift", void 0);

    _defineProperty(this, "space", void 0);

    _defineProperty(this, "i", void 0);

    _defineProperty(this, "p", void 0);

    _defineProperty(this, "j", void 0);

    _defineProperty(this, "m", void 0);

    _defineProperty(this, "esc", void 0);

    this.chatFocused = false;
    this.up = new ButtonInput();
    this.down = new ButtonInput();
    this.left = new ButtonInput();
    this.right = new ButtonInput();
    this.shift = new ButtonInput();
    this.space = new ButtonInput();
    this.i = new ButtonInput();
    this.p = new ButtonInput();
    this.j = new ButtonInput();
    this.m = new ButtonInput();
    this.esc = new ButtonInput();
  }

  _createClass(Controller, [{
    key: "keyDownUp",
    value: function keyDownUp(event) {
      var type = event.type,
          keyCode = event.keyCode;

      if (this.chatFocused) {
        if (keyCode === 13) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.GUI.chatBar.send();
        return;
      } // console.log(keyCode)


      var down = type == "keydown" ? true : false; // console.log(keyCode)

      if (keyCode === 38 || keyCode === 87) this.up.getInput(down);
      if (keyCode === 40 || keyCode === 83) this.down.getInput(down);
      if (keyCode === 37 || keyCode === 65) this.left.getInput(down);
      if (keyCode === 39 || keyCode === 68) this.right.getInput(down);

      switch (keyCode) {
        case 16:
          this.shift.hold(down);
          break;

        case 32:
          this.space.press(down);
          break;
        // interface

        case 73:
          this.i.press(down);
          break;

        case 80:
          this.p.press(down);
          break;

        case 74:
          this.j.press(down);
          break;

        case 77:
          this.m.press(down);
          break;

        case 27:
          this.esc.press(down);
          break;
      }
    }
  }, {
    key: "bindKeys",
    value: function bindKeys() {}
  }]);

  return Controller;
}();



var ButtonInput = /*#__PURE__*/function () {
  function ButtonInput() {
    _classCallCheck(this, ButtonInput);

    _defineProperty(this, "active", void 0);

    _defineProperty(this, "down", void 0);

    _defineProperty(this, "on", void 0);

    _defineProperty(this, "off", void 0);

    this.active = this.down = false;
    this.on = null;
    this.off = null;
  }

  _createClass(ButtonInput, [{
    key: "getInput",
    value: function getInput(down) {
      if (this.down != down) this.active = down;
      this.down = down;
    }
  }, {
    key: "toggle",
    value: function toggle(down) {
      this.getInput(down);
      this.on();
    }
  }, {
    key: "hold",
    value: function hold(down) {
      this.getInput(down);
      if (this.active) this.on();
      if (!this.active) this.off();
    }
  }, {
    key: "press",
    value: function press(down) {
      if (down) this.on();
    }
  }]);

  return ButtonInput;
}();

/***/ }),

/***/ "./src/engine/Engine.ts":
/*!******************************!*\
  !*** ./src/engine/Engine.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
/* harmony import */ var _engine_loops_previewLoop_PreviewLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/engine/loops/previewLoop/PreviewLoop */ "./src/engine/loops/previewLoop/PreviewLoop.ts");
/* harmony import */ var _engine_loops_gameLoop_GameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/engine/loops/gameLoop/GameLoop */ "./src/engine/loops/gameLoop/GameLoop.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Engine = /*#__PURE__*/function (_PIXI$Ticker) {
  _inherits(Engine, _PIXI$Ticker);

  var _super = _createSuper(Engine);

  function Engine() {
    var _this;

    _classCallCheck(this, Engine);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "loops", void 0);

    _this.loops = {
      preview: new _engine_loops_previewLoop_PreviewLoop__WEBPACK_IMPORTED_MODULE_0__["default"](),
      game: new _engine_loops_gameLoop_GameLoop__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
    return _this;
  }

  return Engine;
}(PIXI.Ticker);



/***/ }),

/***/ "./src/engine/loops/Loop.ts":
/*!**********************************!*\
  !*** ./src/engine/loops/Loop.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loop; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Loop = /*#__PURE__*/function () {
  function Loop() {
    _classCallCheck(this, Loop);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "scripts", void 0);

    this.name = this.constructor.name;
    this.scripts = [];
    this.loop = this.loop.bind(this);
  }

  _createClass(Loop, [{
    key: "implement",
    value: function implement(fn, id) {
      fn.id = id;
      this.scripts.push(fn);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this.scripts = this.scripts.filter(function (script) {
        return script.id !== id;
      });
    }
  }, {
    key: "loop",
    value: function loop() {}
  }]);

  return Loop;
}();



/***/ }),

/***/ "./src/engine/loops/gameLoop/GameLoop.ts":
/*!***********************************************!*\
  !*** ./src/engine/loops/gameLoop/GameLoop.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameLoop; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _engine_loops_Loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/engine/loops/Loop */ "./src/engine/loops/Loop.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GameLoop = /*#__PURE__*/function (_Loop) {
  _inherits(GameLoop, _Loop);

  var _super = _createSuper(GameLoop);

  function GameLoop() {
    _classCallCheck(this, GameLoop);

    return _super.apply(this, arguments);
  }

  _createClass(GameLoop, [{
    key: "loop",
    value: function loop() {
      if (!_index__WEBPACK_IMPORTED_MODULE_0__["game"].services.emit.socket.connected) return;
      console.log('game');
      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.scripts.length) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.playScripts();

      var _iterator = _createForOfIteratorHelper(_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.map.actors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var actor = _step.value;

          if (actor.scripts.length) {
            var _iterator2 = _createForOfIteratorHelper(actor.scripts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var script = _step2.value;
                Object.values(script)[0]();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].controller.up.active) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.up();
      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].controller.down.active) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.down();
      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].controller.left.active) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.left();
      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].controller.right.active) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.right();
      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.target.moving) _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.pivot();
      this.scripts.length ? this.scripts.forEach(function (script) {
        script();
      }) : null;
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.render(_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.stage);
    }
  }]);

  return GameLoop;
}(_engine_loops_Loop__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/engine/loops/previewLoop/PreviewLoop.ts":
/*!*****************************************************!*\
  !*** ./src/engine/loops/previewLoop/PreviewLoop.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviewLoop; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _engine_loops_Loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/engine/loops/Loop */ "./src/engine/loops/Loop.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PreviewLoop = /*#__PURE__*/function (_Loop) {
  _inherits(PreviewLoop, _Loop);

  var _super = _createSuper(PreviewLoop);

  function PreviewLoop() {
    _classCallCheck(this, PreviewLoop);

    return _super.apply(this, arguments);
  }

  _createClass(PreviewLoop, [{
    key: "loop",
    value: function loop() {
      console.log('preview');
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.interpolateProgress();
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.drops.forEach(function (drop) {
        drop.update(_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.bottom);
      });
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.waves.forEach(function (wave) {
        wave.update(_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.bottom);
      });
      this.scripts.length ? this.scripts.forEach(function (script) {
        script();
      }) : null;
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.render(_index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.stage);
    }
  }]);

  return PreviewLoop;
}(_engine_loops_Loop__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/entities/Entity.ts":
/*!********************************!*\
  !*** ./src/entities/Entity.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Entity = /*#__PURE__*/function () {
  // transparent: boolean
  function Entity(description) {
    _classCallCheck(this, Entity);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "texture", void 0);

    _defineProperty(this, "textureX", void 0);

    _defineProperty(this, "textureY", void 0);

    _defineProperty(this, "cell", void 0);

    _defineProperty(this, "position", void 0);

    this.name = description.name; // this.transparent = description.transparent

    this.texture = description.texture;
    this.textureX = description.textureX;
    this.textureY = description.textureY;
    this.cell = {
      x: description.cell.x,
      y: description.cell.y
    };
    this.position = {
      x: description.cell.x * 16,
      y: description.cell.y * 16
    };
  }

  _createClass(Entity, [{
    key: "occupy",
    value: function occupy(playState) {
      // if (this.transparent) return
      playState.map.collision[this.cell.y][this.cell.x] = 0;
    }
  }]);

  return Entity;
}();



/***/ }),

/***/ "./src/entities/actors/Actor.ts":
/*!**************************************!*\
  !*** ./src/entities/actors/Actor.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Actor; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity */ "./src/entities/Entity.ts");
/* harmony import */ var _supplements_pointerOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplements/_pointerOver */ "./src/entities/actors/supplements/_pointerOver.ts");
/* harmony import */ var _supplements_pointerOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplements/_pointerOut */ "./src/entities/actors/supplements/_pointerOut.ts");
/* harmony import */ var _supplements_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplements/_interpolate */ "./src/entities/actors/supplements/_interpolate.ts");
/* harmony import */ var _supplements_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplements/_navigate */ "./src/entities/actors/supplements/_navigate.ts");
/* harmony import */ var _supplements_interact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplements/_interact */ "./src/entities/actors/supplements/_interact.ts");
/* harmony import */ var _supplements_addScript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplements/_addScript */ "./src/entities/actors/supplements/_addScript.ts");
/* harmony import */ var _supplements_removeScript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supplements/_removeScript */ "./src/entities/actors/supplements/_removeScript.ts");
/* harmony import */ var _supplements_run__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplements/_run */ "./src/entities/actors/supplements/_run.ts");
/* harmony import */ var _supplements_walk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supplements/_walk */ "./src/entities/actors/supplements/_walk.ts");
/* harmony import */ var _supplements_getSpriteTextures__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./supplements/getSpriteTextures */ "./src/entities/actors/supplements/getSpriteTextures.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Actor = /*#__PURE__*/function (_Entity) {
  _inherits(Actor, _Entity);

  var _super = _createSuper(Actor);

  //graphics        position
  //animation-----------------------          
  //state
  //scripts         
  function Actor(data) {
    var _this;

    _classCallCheck(this, Actor);

    _this = _super.call(this, data);

    _defineProperty(_assertThisInitialized(_this), "textures", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", void 0);

    _defineProperty(_assertThisInitialized(_this), "sprite", void 0);

    _defineProperty(_assertThisInitialized(_this), "portret", void 0);

    _defineProperty(_assertThisInitialized(_this), "outline", void 0);

    _defineProperty(_assertThisInitialized(_this), "moving", void 0);

    _defineProperty(_assertThisInitialized(_this), "animation", void 0);

    _defineProperty(_assertThisInitialized(_this), "speed", void 0);

    _defineProperty(_assertThisInitialized(_this), "direction", void 0);

    _defineProperty(_assertThisInitialized(_this), "isTarget", void 0);

    _defineProperty(_assertThisInitialized(_this), "isChatting", void 0);

    _defineProperty(_assertThisInitialized(_this), "scripts", void 0);

    console.log(data);
    _this.scripts = [];
    _this.textures = Object(_supplements_getSpriteTextures__WEBPACK_IMPORTED_MODULE_11__["default"])(data);
    _this.sprite = new PIXI.Sprite(_this.textures.standSouth);
    _this.sprite.instance = _assertThisInitialized(_this);
    _this.sprite.interactive = true;
    _this.sprite.buttonMode = true;

    _this.sprite.on('pointerover', function () {
      return _this.pointerOver();
    });

    _this.sprite.on('pointerout', function () {
      return _this.pointerOut();
    });

    _this.portret = new PIXI.Sprite(new PIXI.Texture(PIXI.utils.BaseTextureCache['male'], new PIXI.Rectangle(0, 0, 128, 128)));
    _this.target = {
      x: _this.position.x,
      y: _this.position.y
    };
    _this.moving = false;
    _this.speed = 1;
    _this.animation = 0;
    _this.direction = 'South';
    _this.isTarget = false;
    _this.isChatting = false;
    return _this;
  }

  _createClass(Actor, [{
    key: "pointerOver",
    value: function pointerOver() {
      return Object(_supplements_pointerOver__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
    }
  }, {
    key: "pointerOut",
    value: function pointerOut() {
      return Object(_supplements_pointerOut__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    }
  }, {
    key: "interpolate",
    value: function interpolate() {
      return Object(_supplements_interpolate__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState);
    }
  }, {
    key: "navigate",
    value: function navigate(end, action) {
      return Object(_supplements_navigate__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, end, action);
    }
  }, {
    key: "interact",
    value: function interact(name) {
      return Object(_supplements_interact__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, name);
    }
  }, {
    key: "addScript",
    value: function addScript(script) {
      return Object(_supplements_addScript__WEBPACK_IMPORTED_MODULE_7__["default"])(this, script);
    }
  }, {
    key: "removeScript",
    value: function removeScript(name) {
      return Object(_supplements_removeScript__WEBPACK_IMPORTED_MODULE_8__["default"])(this, name);
    }
  }, {
    key: "run",
    value: function run() {
      return Object(_supplements_run__WEBPACK_IMPORTED_MODULE_9__["default"])(this);
    }
  }, {
    key: "walk",
    value: function walk() {
      return Object(_supplements_walk__WEBPACK_IMPORTED_MODULE_10__["default"])(this);
    }
  }]);

  return Actor;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/entities/actors/Hero/Hero.ts":
/*!******************************************!*\
  !*** ./src/entities/actors/Hero/Hero.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Actor */ "./src/entities/actors/Actor.ts");
/* harmony import */ var _supplements_moves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplements/moves */ "./src/entities/actors/Hero/supplements/moves.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Hero = /*#__PURE__*/function (_Actor) {
  _inherits(Hero, _Actor);

  var _super = _createSuper(Hero);

  function Hero(player) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this, player);

    _defineProperty(_assertThisInitialized(_this), "location", void 0);

    _this.outline = new PIXI.OutlineFilter(2, 0xffff00);
    _this.location = player.location;
    _this.moving = false;
    _this.speed = 1;
    return _this;
  }

  _createClass(Hero, [{
    key: "up",
    value: function up() {
      return Object(_supplements_moves__WEBPACK_IMPORTED_MODULE_2__["_up"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"]);
    }
  }, {
    key: "down",
    value: function down() {
      return Object(_supplements_moves__WEBPACK_IMPORTED_MODULE_2__["_down"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"]);
    }
  }, {
    key: "left",
    value: function left() {
      return Object(_supplements_moves__WEBPACK_IMPORTED_MODULE_2__["_left"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"]);
    }
  }, {
    key: "right",
    value: function right() {
      return Object(_supplements_moves__WEBPACK_IMPORTED_MODULE_2__["_right"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"]);
    }
  }]);

  return Hero;
}(_Actor__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/entities/actors/Hero/supplements/moves.ts":
/*!*******************************************************!*\
  !*** ./src/entities/actors/Hero/supplements/moves.ts ***!
  \*******************************************************/
/*! exports provided: _up, _down, _left, _right */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_up", function() { return _up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_down", function() { return _down; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_left", function() { return _left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_right", function() { return _right; });
function _up(hero, game) {
  if (hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return;
  hero.sprite.texture = hero.textures.standNorth;
  hero.direction = 'North';

  if (typeof game.stack.playState.map.collision[hero.cell.y - 1] !== 'undefined' && game.stack.playState.map.collision[hero.cell.y - 1][hero.cell.x]) {
    hero.moving = true;
    hero.target.y -= 16;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1;
    hero.cell.y -= 1;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0;
    game.services.emit.socket.API.send(JSON.stringify({
      type: 'move',
      newPosition: hero.cell
    }));
    hero.addScript({
      'interpolation': function interpolation() {
        return hero.interpolate();
      }
    });
  }
}
function _down(hero, game) {
  if (hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return;
  hero.sprite.texture = hero.textures.standSouth;
  hero.direction = 'South';

  if (typeof game.stack.playState.map.collision[hero.cell.y + 1] !== 'undefined' && game.stack.playState.map.collision[hero.cell.y + 1][hero.cell.x]) {
    hero.moving = true;
    hero.target.y += 16;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1;
    hero.cell.y += 1;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0;
    game.services.emit.socket.API.send(JSON.stringify({
      type: 'move',
      newPosition: hero.cell
    }));
    hero.addScript({
      'interpolation': function interpolation() {
        return hero.interpolate();
      }
    });
  }
}
function _left(hero, game) {
  if (hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return;
  hero.sprite.texture = hero.textures.standWest;
  hero.direction = 'West';

  if (game.stack.playState.map.collision[hero.cell.y][hero.cell.x - 1]) {
    hero.moving = true;
    hero.target.x -= 16;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1;
    hero.cell.x -= 1;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0;
    game.services.emit.socket.API.send(JSON.stringify({
      type: 'move',
      newPosition: hero.cell
    }));
    hero.addScript({
      'interpolation': function interpolation() {
        return hero.interpolate();
      }
    });
  }
}
function _right(hero, game) {
  if (hero.moving || hero.isChatting || game.stack.playState.scene || !game.services.emit.socket.connected) return;
  hero.sprite.texture = hero.textures.standEast;
  hero.direction = 'East';

  if (game.stack.playState.map.collision[hero.cell.y][hero.cell.x + 1]) {
    hero.moving = true;
    hero.target.x += 16;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 1;
    hero.cell.x += 1;
    game.stack.playState.map.collision[hero.cell.y][hero.cell.x] = 0;
    game.services.emit.socket.API.send(JSON.stringify({
      type: 'move',
      newPosition: hero.cell
    }));
    hero.addScript({
      'interpolation': function interpolation() {
        return hero.interpolate();
      }
    });
  }
}

/***/ }),

/***/ "./src/entities/actors/NPC/Enemy/Enemy.ts":
/*!************************************************!*\
  !*** ./src/entities/actors/NPC/Enemy/Enemy.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Actor */ "./src/entities/actors/Actor.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Enemy = /*#__PURE__*/function (_Actor) {
  _inherits(Enemy, _Actor);

  var _super = _createSuper(Enemy);

  function Enemy(data) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, data);
    _this.outline = new PIXI.OutlineFilter(2, 0xff0000);
    return _this;
  }

  return Enemy;
}(_Actor__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entities/actors/NPC/Friend/Friend.ts":
/*!**************************************************!*\
  !*** ./src/entities/actors/NPC/Friend/Friend.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Friend; });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Actor */ "./src/entities/actors/Actor.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Friend = /*#__PURE__*/function (_Actor) {
  _inherits(Friend, _Actor);

  var _super = _createSuper(Friend);

  function Friend(data) {
    var _this;

    _classCallCheck(this, Friend);

    _this = _super.call(this, data);

    _defineProperty(_assertThisInitialized(_this), "lines", void 0);

    _this.outline = new PIXI.OutlineFilter(2, 0x99ff99);
    _this.lines = []; // this.lines = [
    //   {m: 'Hi son!'},
    //   {question: "You're already grown. Are you sure you gonna went to China?", answers: [
    //     {m: "Father. I do. That is my passion", next: 'yes'},
    //     {m: "There is no way i declain my dream", next: 'yes'}
    //   ]},
    //   {label: 'yes', m: "I proud of you. Get this, son."},
    //   {m: "Me, with you'r mom loves you"}
    // ]

    _this.sprite.on('rightclick', function () {
      return _this.click();
    });

    return _this;
  }

  _createClass(Friend, [{
    key: "click",
    value: function click() {
      console.log('clicked');
    }
  }]);

  return Friend;
}(_Actor__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entities/actors/Player/Player.ts":
/*!**********************************************!*\
  !*** ./src/entities/actors/Player/Player.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actor */ "./src/entities/actors/Actor.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Player = /*#__PURE__*/function (_Actor) {
  _inherits(Player, _Actor);

  var _super = _createSuper(Player);

  function Player(player) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, player);
    _this.outline = new PIXI.OutlineFilter(2, 0xffffff);
    _this.moving = false;
    _this.speed = 1;
    return _this;
  }

  _createClass(Player, [{
    key: "move",
    value: function move(newCell) {
      var _this2 = this;

      if (newCell.y - this.cell.y === 1) this.direction = 'South';
      if (newCell.y - this.cell.y === -1) this.direction = 'North';
      if (newCell.x - this.cell.x === 1) this.direction = 'East';
      if (newCell.x - this.cell.x === -1) this.direction = 'West';
      this.moving = true;
      this.target = {
        x: newCell.x * 16,
        y: newCell.y * 16
      };
      this.cell = newCell;
      this.addScript({
        interpolation: function interpolation() {
          return _this2.interpolate();
        }
      });
    }
  }, {
    key: "occupy",
    value: function occupy(playState) {}
  }]);

  return Player;
}(_Actor__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entities/actors/supplements/_addScript.ts":
/*!*******************************************************!*\
  !*** ./src/entities/actors/supplements/_addScript.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor, script) {
  actor.scripts.push(script);
});

/***/ }),

/***/ "./src/entities/actors/supplements/_interact.ts":
/*!******************************************************!*\
  !*** ./src/entities/actors/supplements/_interact.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor, playState, name) {
  playState.playState.interaction(actor, name);
});

/***/ }),

/***/ "./src/entities/actors/supplements/_interpolate.ts":
/*!*********************************************************!*\
  !*** ./src/entities/actors/supplements/_interpolate.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor, playState) {
  var animationStep = 8;
  var distX = actor.target.x - actor.position.x;
  var distY = actor.target.y - actor.position.y;
  var dx = Math.sign(distX) * actor.speed;
  var dy = Math.sign(distY) * actor.speed;

  if (Math.abs(distX) <= actor.speed && Math.abs(distY) <= actor.speed) {
    actor.sprite.texture = actor.textures["stand".concat(actor.direction)];
    actor.position.x = actor.target.x;
    actor.position.y = actor.target.y;
    actor.moving = false;

    if (actor.isTarget) {
      playState.pivot();
      playState.checkPosition();
    } else {
      actor.sprite.position.set(window.innerWidth / 2 + actor.position.x, window.innerHeight / 2 + actor.position.y);
    }

    actor.removeScript('interpolation');
  } else {
    if (Math.abs(distX || distY) % animationStep === 0) {
      actor.animation += 1;
      actor.sprite.texture = actor.textures["walk".concat(actor.direction)][actor.animation];
    }

    if (actor.animation > 3) {
      actor.animation = 0;
      actor.sprite.texture = actor.textures["walk".concat(actor.direction)][actor.animation];
    }

    actor.position.x += dx;
    actor.position.y += dy;

    if (!actor.isTarget) {
      actor.sprite.position.set(window.innerWidth / 2 + actor.position.x, window.innerHeight / 2 + actor.position.y);
    }
  }
});

/***/ }),

/***/ "./src/entities/actors/supplements/_navigate.ts":
/*!******************************************************!*\
  !*** ./src/entities/actors/supplements/_navigate.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (actor, playState, end, action) {
  var collision = playState.map.collision;
  if (!collision[end.y][end.x]) return setTimeout(function () {
    actor.navigate(end, action);
  }, 1000);
  var path = pathFinding(playState, actor.cell, end);
  actor.addScript({
    navigation: function navigation() {
      if (actor.moving || actor.isChatting) return;
      path.shift();

      if (!path.length) {
        actor.removeScript('navigation');
        return action ? action() : null;
      }

      var step = path[0];

      if (step.x === end.x && step.y === end.y && collision[step.y][step.x] === 0) {
        return setTimeout(function () {
          actor.removeScript('navigation');
          actor.navigate(end, action);
        }, 1000);
      }

      if (step.y - actor.cell.y === 1) actor.direction = 'South';
      if (step.y - actor.cell.y === -1) actor.direction = 'North';
      if (step.x - actor.cell.x === 1) actor.direction = 'East';
      if (step.x - actor.cell.x === -1) actor.direction = 'West';

      if (collision[step.y][step.x] === 0) {
        path = pathFinding(playState, actor.cell, end);
      } else {
        actor.moving = true;
        actor.target = {
          x: step.x * 16,
          y: step.y * 16
        };
        collision[actor.cell.y][actor.cell.x] = 1;
        actor.cell = step;
        collision[actor.cell.y][actor.cell.x] = 0;
        actor.addScript({
          interpolation: function interpolation() {
            return actor.interpolate();
          }
        });
      }
    }
  });
});

function pathFinding(playState, start, end) {
  var terrain = playState.map.collision;

  var Node = function Node(coordinate) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Node);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "g", void 0);

    _defineProperty(this, "h", void 0);

    _defineProperty(this, "f", void 0);

    this.parent = parent;
    this.x = coordinate.x;
    this.y = coordinate.y;
    this.g = 0;
    this.h = 0;
    this.f = 0;
  };

  var openSet = [new Node(start)];
  var closedSet = [];

  var _loop = function _loop() {
    var current = openSet[0];

    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < current.f) {
        current = openSet[i];
      }
    }

    openSet = openSet.filter(function (nodes) {
      return nodes !== current;
    });
    closedSet.push(current);

    if (current.x === end.x && current.y === end.y) {
      var path = [];

      while (current) {
        path.push({
          x: current.x,
          y: current.y
        });
        current = current.parent;
      }

      return {
        v: path.reverse()
      };
    }

    var neighbors = [];

    for (var _i = 0, _arr = [{
      x: 0,
      y: -1
    }, {
      x: 0,
      y: 1
    }, {
      x: -1,
      y: 0
    }, {
      x: 1,
      y: 0
    }]; _i < _arr.length; _i++) {
      var direction = _arr[_i];
      var nodePosition = {
        x: current.x + direction.x,
        y: current.y + direction.y
      };

      if (terrain[nodePosition.y] !== undefined && terrain[nodePosition.y][nodePosition.x] !== undefined && terrain[nodePosition.y][nodePosition.x] && !closedSet.includes(new Node(nodePosition, current))) {
        var neighbor = new Node(nodePosition, current);
        neighbors.push(neighbor);
      }
    }

    for (var _i2 = 0, _neighbors = neighbors; _i2 < _neighbors.length; _i2++) {
      var _neighbor = _neighbors[_i2];

      if (!closedSet.includes(_neighbor)) {
        _neighbor.g = current.g + 1;
        _neighbor.h = Math.pow(_neighbor.x - end.x, 2) + Math.pow(_neighbor.y - end.y, 2);
        _neighbor.f = _neighbor.g + _neighbor.h;
      }

      var _iterator = _createForOfIteratorHelper(openSet),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;

          if (_neighbor === node && _neighbor.g > node.g) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      openSet.push(_neighbor);
    }
  };

  while (openSet.length) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  }
}

/***/ }),

/***/ "./src/entities/actors/supplements/_pointerOut.ts":
/*!********************************************************!*\
  !*** ./src/entities/actors/supplements/_pointerOut.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor) {
  actor.sprite.filters = [];
});

/***/ }),

/***/ "./src/entities/actors/supplements/_pointerOver.ts":
/*!*********************************************************!*\
  !*** ./src/entities/actors/supplements/_pointerOver.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor) {
  actor.sprite.filters = [actor.outline];
  console.log(actor.name);
});

/***/ }),

/***/ "./src/entities/actors/supplements/_removeScript.ts":
/*!**********************************************************!*\
  !*** ./src/entities/actors/supplements/_removeScript.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor, name) {
  actor.scripts = actor.scripts.filter(function (script) {
    return Object.keys(script)[0] !== name;
  });
});

/***/ }),

/***/ "./src/entities/actors/supplements/_run.ts":
/*!*************************************************!*\
  !*** ./src/entities/actors/supplements/_run.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor) {
  if (actor.position.x % 2 !== 0) actor.position.x += 1;
  if (actor.position.y % 2 !== 0) actor.position.y += 1;
  actor.speed = 2;
});

/***/ }),

/***/ "./src/entities/actors/supplements/_walk.ts":
/*!**************************************************!*\
  !*** ./src/entities/actors/supplements/_walk.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (actor) {
  actor.speed = 1;
});

/***/ }),

/***/ "./src/entities/actors/supplements/getSpriteTextures.ts":
/*!**************************************************************!*\
  !*** ./src/entities/actors/supplements/getSpriteTextures.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var texture = PIXI.utils.BaseTextureCache[data.texture];
  var w = 26;
  var h = 36;
  var startX = data.textureX * w;
  var startY = data.textureY * h;
  return {
    standSouth: new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 0, w, h)),
    standWest: new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 1, w, h)),
    standEast: new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 2, w, h)),
    standNorth: new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 3, w, h)),
    walkSouth: [new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 0, startY + h * 0, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 0, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 2, startY + h * 0, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 0, w, h))],
    walkWest: [new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 0, startY + h * 1, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 1, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 2, startY + h * 1, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 1, w, h))],
    walkEast: [new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 0, startY + h * 2, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 2, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 2, startY + h * 2, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 2, w, h))],
    walkNorth: [new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 0, startY + h * 3, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 3, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 2, startY + h * 3, w, h)), new PIXI.Texture(texture, new PIXI.Rectangle(startX + w * 1, startY + h * 3, w, h))]
  };
});

/***/ }),

/***/ "./src/render/Renderer.ts":
/*!********************************!*\
  !*** ./src/render/Renderer.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Renderer = /*#__PURE__*/function () {
  function Renderer($canvas) {
    _classCallCheck(this, Renderer);

    _defineProperty(this, "screen", void 0);

    this.screen = PIXI.autoDetectRenderer({
      view: $canvas,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio
    });
  }

  _createClass(Renderer, [{
    key: "resize",
    value: function resize() {
      var WIDTH = window.innerWidth % 2 ? window.innerWidth - 1 : window.innerWidth;
      var HEIGHT = window.innerHeight % 2 ? window.innerHeight - 1 : window.innerHeight;
      this.screen.resize(WIDTH, HEIGHT);
      _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.startState.resize();

      if (_index__WEBPACK_IMPORTED_MODULE_0__["game"].services.status.builded) {
        _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.resize();
        _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.GUI.HUD.resize();
      }
    }
  }]);

  return Renderer;
}();



/***/ }),

/***/ "./src/render/stack/Stack.ts":
/*!***********************************!*\
  !*** ./src/render/stack/Stack.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateStack; });
/* harmony import */ var _states_FilterState_FilterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/FilterState/FilterState */ "./src/render/stack/states/FilterState/FilterState.ts");
/* harmony import */ var _states_StartState_StartState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/StartState/StartState */ "./src/render/stack/states/StartState/StartState.ts");
/* harmony import */ var _states_ChatState_ChatState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/ChatState/ChatState */ "./src/render/stack/states/ChatState/ChatState.ts");
/* harmony import */ var _states_BattleState_BattleState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/BattleState/BattleState */ "./src/render/stack/states/BattleState/BattleState.ts");
/* harmony import */ var _states_PlayState_PlayState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/PlayState/PlayState */ "./src/render/stack/states/PlayState/PlayState.ts");
/* harmony import */ var _states_GUI_GUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/GUI/GUI */ "./src/render/stack/states/GUI/GUI.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var StateStack = function StateStack(renderer) {
  _classCallCheck(this, StateStack);

  _defineProperty(this, "stage", void 0);

  _defineProperty(this, "playState", void 0);

  _defineProperty(this, "GUI", void 0);

  _defineProperty(this, "chatState", void 0);

  _defineProperty(this, "battleState", void 0);

  _defineProperty(this, "startState", void 0);

  _defineProperty(this, "filterState", void 0);

  // Main stage that includes every scene
  this.stage = new PIXI.display.Stage();
  this.stage.sortableChildren = true;
  this.stage.filterArea = renderer.screen.screen;
  this.playState = new _states_PlayState_PlayState__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.GUI = new _states_GUI_GUI__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.chatState = new _states_ChatState_ChatState__WEBPACK_IMPORTED_MODULE_2__["default"]();
  this.battleState = new _states_BattleState_BattleState__WEBPACK_IMPORTED_MODULE_3__["default"]();
  this.startState = new _states_StartState_StartState__WEBPACK_IMPORTED_MODULE_1__["default"](this, renderer);
  this.filterState = new _states_FilterState_FilterState__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.stage.addChild(this.playState.stage);
  this.stage.addChild(this.GUI.stage);
  this.stage.addChild(this.battleState.stage);
  this.stage.addChild(this.chatState.stage);
  this.stage.addChild(this.startState.stage);
  this.stage.addChild(this.filterState.stage);
};



/***/ }),

/***/ "./src/render/stack/states/BattleState/BattleState.ts":
/*!************************************************************!*\
  !*** ./src/render/stack/states/BattleState/BattleState.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BattleState; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BattleState = /*#__PURE__*/function (_State) {
  _inherits(BattleState, _State);

  var _super = _createSuper(BattleState);

  function BattleState() {
    _classCallCheck(this, BattleState);

    return _super.call(this);
  }

  return BattleState;
}(_State__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/ChatState/ChatState.ts":
/*!********************************************************!*\
  !*** ./src/render/stack/states/ChatState/ChatState.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatState; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ChatState = /*#__PURE__*/function (_State) {
  _inherits(ChatState, _State);

  var _super = _createSuper(ChatState);

  function ChatState() {
    _classCallCheck(this, ChatState);

    return _super.call(this);
  }

  return ChatState;
}(_State__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/FilterState/FilterState.ts":
/*!************************************************************!*\
  !*** ./src/render/stack/states/FilterState/FilterState.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EffectState; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var EffectState = /*#__PURE__*/function (_State) {
  _inherits(EffectState, _State);

  var _super = _createSuper(EffectState);

  function EffectState() {
    _classCallCheck(this, EffectState);

    return _super.call(this);
  }

  return EffectState;
}(_State__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/GUI/GUI.ts":
/*!********************************************!*\
  !*** ./src/render/stack/states/GUI/GUI.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GUI; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
/* harmony import */ var _HUD_HUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HUD/HUD */ "./src/render/stack/states/GUI/HUD/HUD.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var GUI = /*#__PURE__*/function (_State) {
  _inherits(GUI, _State);

  var _super = _createSuper(GUI);

  function GUI() {
    var _this;

    _classCallCheck(this, GUI);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "HUD", void 0);

    _this.HUD = new _HUD_HUD__WEBPACK_IMPORTED_MODULE_1__["default"]();

    _this.stage.addChild(_this.HUD.stage);

    return _this;
  }

  return GUI;
}(_State__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/HUD.ts":
/*!************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/HUD.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HUD; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../State */ "./src/render/stack/states/State.ts");
/* harmony import */ var _bars_Character_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bars/Character/Character */ "./src/render/stack/states/GUI/HUD/bars/Character/Character.ts");
/* harmony import */ var _bars_Chat_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bars/Chat/Chat */ "./src/render/stack/states/GUI/HUD/bars/Chat/Chat.ts");
/* harmony import */ var _bars_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bars/Menu/Menu */ "./src/render/stack/states/GUI/HUD/bars/Menu/Menu.ts");
/* harmony import */ var _bars_MiniMap_MiniMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bars/MiniMap/MiniMap */ "./src/render/stack/states/GUI/HUD/bars/MiniMap/MiniMap.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var HUD = /*#__PURE__*/function (_State) {
  _inherits(HUD, _State);

  var _super = _createSuper(HUD);

  function HUD() {
    var _this;

    _classCallCheck(this, HUD);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "character", void 0);

    _defineProperty(_assertThisInitialized(_this), "chat", void 0);

    _defineProperty(_assertThisInitialized(_this), "menu", void 0);

    _defineProperty(_assertThisInitialized(_this), "miniMap", void 0);

    _defineProperty(_assertThisInitialized(_this), "HUDswitcherBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "inventoryBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "questsBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "achivementsBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "menuBtn", void 0);

    _this.stage.x = 0;
    _this.stage.y = 0;
    _this.stage.visible = true;
    _this.character = new _bars_Character_Character__WEBPACK_IMPORTED_MODULE_2__["default"](300, 100);
    _this.chat = new _bars_Chat_Chat__WEBPACK_IMPORTED_MODULE_3__["default"](500, 200);
    _this.menu = new _bars_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"](500, 50);
    _this.miniMap = new _bars_MiniMap_MiniMap__WEBPACK_IMPORTED_MODULE_5__["default"](200, 200);
    _this.HUDswitcherBtn = new PIXI.Graphics();

    _this.HUDswitcherBtn.beginFill(0xFF0000);

    _this.HUDswitcherBtn.drawRect(0, 0, 36, 36);

    _this.HUDswitcherBtn.endFill();

    _this.HUDswitcherBtn.interactive = true;
    _this.HUDswitcherBtn.buttonMode = true;

    _this.HUDswitcherBtn.on('click', function () {
      _this.character.stage.visible = !_this.character.stage.visible;
      _this.chat.stage.visible = !_this.chat.stage.visible;
      _this.menu.stage.visible = !_this.menu.stage.visible;
    });

    _this.stage.addChild(_this.character.stage);

    _this.stage.addChild(_this.chat.stage);

    _this.stage.addChild(_this.menu.stage);

    _this.stage.addChild(_this.miniMap.stage);

    _this.stage.addChild(_this.HUDswitcherBtn);

    return _this;
  }

  _createClass(HUD, [{
    key: "resize",
    value: function resize() {
      this.chat.stage.x = 0;
      this.chat.stage.y = _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.height - this.chat.height;
      this.menu.stage.x = _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.width - this.menu.width;
      this.menu.stage.y = _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.height - this.menu.height;
      this.miniMap.stage.x = _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.width - this.miniMap.width;
      this.miniMap.stage.y = 0;
      this.HUDswitcherBtn.x = _index__WEBPACK_IMPORTED_MODULE_0__["game"].renderer.screen.width - this.miniMap.width - 38;
      this.HUDswitcherBtn.y = 2;
    }
  }, {
    key: "build",
    value: function build() {// stack.playState.stage.addChild(this.characterBar.stage)
      // stack.stage.addChild(this.stage)
      // this.show()
      // stack.playState.stage.addChild(this.chatBar.stage)
      // stack.playState.stage.addChild(this.menuBar.stage)
      // stack.playState.stage.addChild(this.HUDswitcherBtn)
      // this.show()
      // console.log('HUD')
    }
  }]);

  return HUD;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]); // HUD.build = function() {
//     console.log('123')
// }




/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/Character/Character.ts":
/*!*********************************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/Character/Character.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var _HUDelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HUDelement */ "./src/render/stack/states/GUI/HUD/bars/HUDelement.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Character = /*#__PURE__*/function (_HUDelement) {
  _inherits(Character, _HUDelement);

  var _super = _createSuper(Character);

  function Character(width, height) {
    var _this;

    _classCallCheck(this, Character);

    _this = _super.call(this, width, height);
    _this.stage.x = 0;
    _this.stage.y = 0;
    return _this;
  }

  return Character;
}(_HUDelement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/Chat/Chat.ts":
/*!***********************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/Chat/Chat.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony import */ var _HUDelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HUDelement */ "./src/render/stack/states/GUI/HUD/bars/HUDelement.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./src/render/stack/states/GUI/HUD/bars/Chat/commands.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Chat = /*#__PURE__*/function (_HUDelement) {
  _inherits(Chat, _HUDelement);

  var _super = _createSuper(Chat);

  function Chat(width, height) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _super.call(this, width, height);

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _this.input = new PIXI.TextInput({
      input: {
        fontSize: '18px',
        padding: '12px',
        width: '480px',
        color: '#26272E'
      },
      box: {
        "default": {
          fill: 0xE8E9F3,
          rounded: 0,
          stroke: {
            color: 0xCBCEE0,
            width: 0
          }
        },
        focused: {
          fill: 0xE1E3EE,
          rounded: 0,
          stroke: {
            color: 0xABAFC6,
            width: 0
          }
        },
        disabled: {
          fill: 0xDBDBDB,
          rounded: 0
        }
      }
    });
    _this.input.placeholder = 'Enter your Text...';
    _this.input.x = 10;
    _this.input.y = 145;

    _this.stage.addChild(_this.input);

    _this.input.on('focus', function () {
      game.controller.chatFocused = true;
    });

    _this.input.on('blur', function () {
      game.controller.chatFocused = false;
    });

    return _this;
  }

  _createClass(Chat, [{
    key: "send",
    value: function send() {
      if (this.input.text[0] === '/') Object(_commands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.input.text);else {
        console.log(this.input.text);
      }
      this.input.text = '';
    }
  }]);

  return Chat;
}(_HUDelement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/Chat/commands.ts":
/*!***************************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/Chat/commands.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (input) {
  eval(input.slice(1)); // switch (input) {
  //     case '/player': {
  //         console.log(stack.playState.player)
  //     }
  //     case '/player:speed=1': {
  //         stack.playState.player.speed = 1
  //     }
  //     case '/player:speed=3': {
  //         stack.playState.player.speed = 3
  //     }
  //     case '/player:speed=4': {
  //         stack.playState.player.speed = 4
  //     }
  // }
});

/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/HUDelement.ts":
/*!************************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/HUDelement.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HUDelement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HUDelement = function HUDelement(width, height) {
  _classCallCheck(this, HUDelement);

  _defineProperty(this, "stage", void 0);

  _defineProperty(this, "graphics", void 0);

  _defineProperty(this, "width", void 0);

  _defineProperty(this, "height", void 0);

  this.width = width;
  this.height = height;
  this.stage = new PIXI.Container();
  this.stage.width = this.width;
  this.stage.height = this.height;
  this.graphics = new PIXI.Graphics();
  this.graphics.beginFill(0xFFFF00);
  this.graphics.drawRect(0, 0, this.width, this.height);
  this.graphics.endFill();
  this.stage.addChild(this.graphics);
};



/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/Menu/Menu.ts":
/*!***********************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/Menu/Menu.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _HUDelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HUDelement */ "./src/render/stack/states/GUI/HUD/bars/HUDelement.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Menu = /*#__PURE__*/function (_HUDelement) {
  _inherits(Menu, _HUDelement);

  var _super = _createSuper(Menu);

  function Menu(width, height) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, width, height);

    _defineProperty(_assertThisInitialized(_this), "inventoryBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "questsBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "achivementsBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "menuBtn", void 0);

    _this.inventoryBtn = new PIXI.Sprite();
    _this.questsBtn = new PIXI.Sprite();
    _this.achivementsBtn = new PIXI.Sprite();
    _this.menuBtn = new PIXI.Sprite();
    return _this;
  }

  return Menu;
}(_HUDelement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/GUI/HUD/bars/MiniMap/MiniMap.ts":
/*!*****************************************************************!*\
  !*** ./src/render/stack/states/GUI/HUD/bars/MiniMap/MiniMap.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniMap; });
/* harmony import */ var _HUDelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HUDelement */ "./src/render/stack/states/GUI/HUD/bars/HUDelement.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MiniMap = /*#__PURE__*/function (_HUDelement) {
  _inherits(MiniMap, _HUDelement);

  var _super = _createSuper(MiniMap);

  function MiniMap(width, height) {
    _classCallCheck(this, MiniMap);

    return _super.call(this, width, height);
  }

  return MiniMap;
}(_HUDelement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/PlayState/PlayState.ts":
/*!********************************************************!*\
  !*** ./src/render/stack/states/PlayState/PlayState.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayState; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _supplements_pivot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplements/_pivot */ "./src/render/stack/states/PlayState/supplements/_pivot.ts");
/* harmony import */ var _supplements_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplements/_resize */ "./src/render/stack/states/PlayState/supplements/_resize.ts");
/* harmony import */ var _supplements_changeCamera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplements/_changeCamera */ "./src/render/stack/states/PlayState/supplements/_changeCamera.ts");
/* harmony import */ var _supplements_zoomCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplements/_zoomCamera */ "./src/render/stack/states/PlayState/supplements/_zoomCamera.ts");
/* harmony import */ var _supplements_checkPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplements/_checkPosition */ "./src/render/stack/states/PlayState/supplements/_checkPosition.ts");
/* harmony import */ var _supplements_changeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplements/_changeMap */ "./src/render/stack/states/PlayState/supplements/_changeMap.ts");
/* harmony import */ var _supplements_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supplements/_interaction */ "./src/render/stack/states/PlayState/supplements/_interaction.ts");
/* harmony import */ var _supplements_playScripts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplements/_playScripts */ "./src/render/stack/states/PlayState/supplements/_playScripts.ts");
/* harmony import */ var _supplements_addScript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supplements/_addScript */ "./src/render/stack/states/PlayState/supplements/_addScript.ts");
/* harmony import */ var _supplements_removeScript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./supplements/_removeScript */ "./src/render/stack/states/PlayState/supplements/_removeScript.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var PlayState = /*#__PURE__*/function (_State) {
  _inherits(PlayState, _State);

  var _super = _createSuper(PlayState);

  function PlayState() {
    var _this;

    _classCallCheck(this, PlayState);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "stage", void 0);

    _defineProperty(_assertThisInitialized(_this), "actorsGroup", void 0);

    _defineProperty(_assertThisInitialized(_this), "zoomX", void 0);

    _defineProperty(_assertThisInitialized(_this), "zoomY", void 0);

    _defineProperty(_assertThisInitialized(_this), "player", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", void 0);

    _defineProperty(_assertThisInitialized(_this), "map", void 0);

    _defineProperty(_assertThisInitialized(_this), "scripts", void 0);

    _defineProperty(_assertThisInitialized(_this), "scene", void 0);

    _this.stage = new PIXI.Container();
    _this.actorsGroup = new PIXI.display.Group(0, true);

    _this.actorsGroup.on('sort', function (sprite) {
      sprite.zOrder = sprite.instance.position.y;
    });

    _this.zoomX = 480; // 240

    _this.zoomY = 270; // 135

    _this.player = null;
    _this.target = null;
    _this.map = null;
    _this.scripts = [];
    _this.scene = false;
    return _this;
  }

  _createClass(PlayState, [{
    key: "pivot",
    value: function pivot() {
      return Object(_supplements_pivot__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
    }
  }, {
    key: "resize",
    value: function resize() {
      return Object(_supplements_resize__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_1__["game"].renderer.screen);
    }
  }, {
    key: "changeCamera",
    value: function changeCamera(actor, zoom) {
      return Object(_supplements_changeCamera__WEBPACK_IMPORTED_MODULE_4__["default"])(this, actor, zoom);
    }
  }, {
    key: "zoomCamera",
    value: function zoomCamera(zoom) {
      return Object(_supplements_zoomCamera__WEBPACK_IMPORTED_MODULE_5__["default"])(this, zoom);
    }
  }, {
    key: "checkPosition",
    value: function checkPosition() {
      return Object(_supplements_checkPosition__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_1__["game"].services);
    }
  }, {
    key: "changeMap",
    value: function changeMap(location) {
      return Object(_supplements_changeMap__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_1__["game"], location);
    }
  }, {
    key: "interaction",
    value: function interaction(actor, target) {
      return Object(_supplements_interaction__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_1__["game"], actor, target);
    }
  }, {
    key: "playScripts",
    value: function playScripts() {
      return Object(_supplements_playScripts__WEBPACK_IMPORTED_MODULE_9__["default"])(this);
    }
  }, {
    key: "addScript",
    value: function addScript(script) {
      return Object(_supplements_addScript__WEBPACK_IMPORTED_MODULE_10__["default"])(this, script);
    }
  }, {
    key: "removeScript",
    value: function removeScript(script) {
      return Object(_supplements_removeScript__WEBPACK_IMPORTED_MODULE_11__["default"])(this, script);
    }
  }]);

  return PlayState;
}(_State__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_addScript.ts":
/*!*********************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_addScript.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, script) {
  playState.scripts.push(script);
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_changeCamera.ts":
/*!************************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_changeCamera.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, actor, zoom) {
  playState.target.isTarget = false;
  playState.target = actor;
  playState.target.isTarget = true;
  if (zoom) playState.addScript(function () {
    return playState.zoomCamera(zoom);
  });
  playState.pivot();
  playState.resize();
  playState.target.sprite.pivot.set(null);
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_changeMap.ts":
/*!*********************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_changeMap.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, game, location) {
  if (!playState.player.isTarget) return; // game.stack.fadeInState.show()
  // game.stack.fadeInState.addScript(() => game.stack.fadeInState.fadeOut())

  console.log(location);
  var _playState$map$adjace = playState.map.adjacent[location].to,
      x = _playState$map$adjace.x,
      y = _playState$map$adjace.y;
  playState.player.location = location;
  playState.map.collision[playState.player.cell.y][playState.player.cell.x] = 1;
  playState.player.cell = {
    x: x,
    y: y
  };
  playState.map.collision[playState.player.cell.y][playState.player.cell.x] = 0;
  playState.player.position = {
    x: playState.player.cell.x * 16,
    y: playState.player.cell.y * 16
  };
  playState.player.target = {
    x: playState.player.position.x,
    y: playState.player.position.y
  };
  playState.map.actors = playState.map.actors.filter(function (actor) {
    return actor.constructor.name !== 'Hero';
  });
  playState.map = game.services.storage.locations[location];
  playState.map.actors.push(playState.player);
  playState.stage.removeChildren();
  playState.stage.addChild(game.services.storage.locations[location].layers.after);
  playState.map.actors.forEach(function (actor) {
    return playState.stage.addChild(actor.sprite);
  });
  playState.stage.addChild(game.services.storage.locations[location].layers.before);
  playState.resize();
  playState.pivot();

  if (playState.map.lesson && 'first') {// this.popupModal('lesson')
  }
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_checkPosition.ts":
/*!*************************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_checkPosition.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x, _x2) {
  return _ref.apply(this, arguments);
});

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(playState, services) {
    var map, newMaps, _map;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = regeneratorRuntime.keys(playState.map.adjacent);

          case 1:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 16;
              break;
            }

            map = _context.t1.value;

            if (!(playState.player.cell.x === playState.map.adjacent[map].entry.x && playState.player.cell.y === playState.map.adjacent[map].entry.y)) {
              _context.next = 14;
              break;
            }

            playState.changeMap(map);
            services.emit.socket.changeTo(services.storage.locations[map].port);
            newMaps = [];

            for (_map in playState.map.adjacent) {
              if (!(_map in services.storage._maps)) {
                newMaps.push(_map);
              }
            }

            if (!newMaps.length) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return services.setup.loadMaps(newMaps);

          case 11:
            _context.next = 13;
            return services.setup.createLocations();

          case 13:
            return _context.abrupt("break", 16);

          case 14:
            _context.next = 1;
            break;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_interaction.ts":
/*!***********************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_interaction.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, game, actor, target) {
  if (target) {
    game.stack.chatState.dialogue(actor, target);
  } else {
    var _actor$cell = actor.cell,
        x = _actor$cell.x,
        y = _actor$cell.y;
    var direction;
    var xOffset = actor.direction === 'East' ? 1 : actor.direction === 'West' ? -1 : 0;
    var yOffset = actor.direction === 'South' ? 1 : actor.direction === 'North' ? -1 : 0;
    xOffset === 1 ? direction = 'West' : null;
    xOffset === -1 ? direction = 'East' : null;
    yOffset === 1 ? direction = 'North' : null;
    yOffset === -1 ? direction = 'South' : null;
    playState.map.actors.forEach(function (target) {
      if (target.cell.x === x + xOffset && target.cell.y === y + yOffset) {
        target.sprite.texture = target.textures["stand".concat(direction)];
        game.stack.chatState.dialogue(actor, target);
      }
    });
    playState.map.items.forEach(function (item) {
      if (item.cell.x === x + xOffset && item.cell.y === y + yOffset) {
        item.use();
      }
    });
  }
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_pivot.ts":
/*!*****************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_pivot.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState) {
  playState.map.layers.after.pivot.set(playState.target.position.x, playState.target.position.y);
  playState.map.layers.before.pivot.set(playState.target.position.x, playState.target.position.y);
  playState.map.actors.forEach(function (actor) {
    if (!actor.isTarget) {
      actor.sprite.pivot.set(playState.target.position.x, playState.target.position.y);
    }
  });
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_playScripts.ts":
/*!***********************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_playScripts.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function (playState) {
  var _iterator = _createForOfIteratorHelper(playState.scripts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var script = _step.value;
      console.log(playState.scripts);
      script();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_removeScript.ts":
/*!************************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_removeScript.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, script) {
  playState.scripts.splice(playState.scripts.indexOf(script), 1);
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_resize.ts":
/*!******************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_resize.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, renderer) {
  playState.stage.scale.set(Math.round(window.innerWidth / playState.zoomX), Math.round(window.innerHeight / playState.zoomY));
  var targetOffsetX = renderer.width / 2;
  var targetOffsetY = renderer.height / 2;
  playState.target.sprite.x = targetOffsetX;
  playState.target.sprite.y = targetOffsetY;
  playState.stage.position.set(playState.target.sprite.x, playState.target.sprite.y);
  playState.stage.pivot.set(targetOffsetX + playState.target.sprite.width / 2, targetOffsetY + playState.target.sprite.height / 2);
  playState.map.layers.after.position.set(targetOffsetX + (playState.target.sprite.width - 16) / 2, targetOffsetY + (playState.target.sprite.height - 16 + 2));
  playState.map.layers.before.position.set(targetOffsetX + (playState.target.sprite.width - 16) / 2, targetOffsetY + (playState.target.sprite.height - 16 + 2));
  playState.map.actors.forEach(function (actor) {
    if (!actor.isTarget) {
      actor.sprite.position.set(targetOffsetX + actor.position.x, targetOffsetY + actor.position.y);
    }
  });
});

/***/ }),

/***/ "./src/render/stack/states/PlayState/supplements/_zoomCamera.ts":
/*!**********************************************************************!*\
  !*** ./src/render/stack/states/PlayState/supplements/_zoomCamera.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (playState, zoom) {
  if (playState.zoom >= zoom) {
    playState.zoom = zoom;
    playState.stage.scale.set(zoom, zoom);
    playState.stage.scale;
    playState.removeScript(playState.zoomCamera);
    console.log(playState.zoom);
    return;
  }

  playState.zoom += .05;
  playState.stage.scale.set(playState.zoom, playState.zoom);
});

/***/ }),

/***/ "./src/render/stack/states/StartState/StartState.ts":
/*!**********************************************************!*\
  !*** ./src/render/stack/states/StartState/StartState.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartState; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../State */ "./src/render/stack/states/State.ts");
/* harmony import */ var _assets_droplet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/droplet.png */ "./src/render/stack/states/StartState/assets/droplet.png");
/* harmony import */ var _dependencies_Particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependencies/Particle */ "./src/render/stack/states/StartState/dependencies/Particle.ts");
/* harmony import */ var _dependencies_Wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dependencies/Wave */ "./src/render/stack/states/StartState/dependencies/Wave.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var StartState = /*#__PURE__*/function (_State) {
  _inherits(StartState, _State);

  var _super = _createSuper(StartState);

  function StartState(stack, renderer) {
    var _this;

    _classCallCheck(this, StartState);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "stackRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "elevator", void 0);

    _defineProperty(_assertThisInitialized(_this), "texture", void 0);

    _defineProperty(_assertThisInitialized(_this), "textureSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "characters", void 0);

    _defineProperty(_assertThisInitialized(_this), "drops", void 0);

    _defineProperty(_assertThisInitialized(_this), "waves", void 0);

    _defineProperty(_assertThisInitialized(_this), "progress", void 0);

    _defineProperty(_assertThisInitialized(_this), "bottom", void 0);

    _defineProperty(_assertThisInitialized(_this), "box", void 0);

    _this.stackRef = stack;
    _this.stage = new PIXI.ParticleContainer(1000);
    _this.elevator = new PIXI.Graphics();
    renderer.screen.generateTexture(_this.elevator);
    _this.texture = PIXI.Texture.from(_assets_droplet_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
    _this.textureSize = 24;
    _this.characters = ['A', 'H', 'E', 'O', 'L', 'F', 'R', 'Y', 'U', 'P', 'K'];
    _this.drops = [];
    _this.waves = [];
    _this.progress = 0;
    _this.bottom = window.innerHeight - _this.progress * window.innerHeight / 100;

    _this.elevator.beginFill(0xFFFF00);

    _this.elevator.drawRect(100, 100, 100, 100);

    _this.elevator.endFill();

    _this.addFilters();

    _this.generateWave(); // this.box = new PIXI.Sprite(renderer.screen.generateTexture(this.elevator))
    // this.stage.addChild(this.box)


    setInterval(function () {
      // this.progress += 3
      // this.bottom = window.innerHeight - ((this.progress * window.innerHeight) / 100)
      _this.generateLetter();
    }, 300);
    return _this;
  }

  _createClass(StartState, [{
    key: "randomizer",
    value: function randomizer(min, max) {
      return min + (max - min) * Math.random();
    }
  }, {
    key: "generateLetter",
    value: function generateLetter() {
      var _this2 = this;

      var letter = this.characters[Math.round(Math.random() * this.characters.length)];
      var leon = new LeonSans({
        text: letter,
        color: ['#000000'],
        size: 200,
        weight: 10,
        isPath: true,
        tracking: 5
      });
      var posX = this.randomizer(0, window.innerWidth - 150);
      var posY = this.randomizer(-100, 100);
      leon.paths.forEach(function (point) {
        var particle = new _dependencies_Particle__WEBPACK_IMPORTED_MODULE_3__["default"](point.x, point.y, _this2.texture, _this2.textureSize, posX, posY, _this2.randomizer);

        _this2.drops.push(particle);

        _this2.stage.addChild(particle.sprite);
      });
    }
  }, {
    key: "generateWave",
    value: function generateWave() {
      for (var i = 0; i < window.screen.availWidth / 300 * 5; i++) {
        var wave = new _dependencies_Wave__WEBPACK_IMPORTED_MODULE_4__["default"](this.texture, i, this.randomizer);
        this.waves.push(wave);
        this.stage.addChild(wave.sprite);
      }
    }
  }, {
    key: "addFilters",
    value: function addFilters() {
      var blurFilter = new PIXI.filters.BlurFilter();
      blurFilter.blur = 15;
      var shader = "varying vec2 vTextureCoord;\n\n        uniform sampler2D uSampler;\n        \n        void main(void){\n            vec4 color = texture2D(uSampler, vTextureCoord);\n            if(color.a>0.3) {\n                gl_FragColor = vec4(1.,1.,1.,1.);\n            } else {\n                gl_FragColor = vec4(0.,0.,0.,1.);\n            }\n            // gl_FragColor = texture2D(uSampler, vTextureCoord);\n           \n        }";
      var threasholdFilter = new PIXI.Filter(undefined, shader, {});
      this.stackRef.stage.filters = [blurFilter, threasholdFilter];
    }
  }, {
    key: "interpolateProgress",
    value: function interpolateProgress() {
      if (this.progress !== _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.status.setupProgress) {
        this.progress += .5;
        this.bottom = window.innerHeight - this.progress * window.innerHeight / 100;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.progress = _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.status.setupProgress;
      this.bottom = window.innerHeight - _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.status.setupProgress * window.innerHeight / 100;
    }
  }]);

  return StartState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/render/stack/states/StartState/assets/droplet.png":
/*!***************************************************************!*\
  !*** ./src/render/stack/states/StartState/assets/droplet.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6cb43cd981ca0924686ab7993788f7d.png");

/***/ }),

/***/ "./src/render/stack/states/StartState/dependencies/Particle.ts":
/*!*********************************************************************!*\
  !*** ./src/render/stack/states/StartState/dependencies/Particle.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Particle = /*#__PURE__*/function () {
  function Particle(x, y, texture, size, posX, posY, randomizer) {
    _classCallCheck(this, Particle);

    _defineProperty(this, "sprite", void 0);

    _defineProperty(this, "size", void 0);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "vx", void 0);

    _defineProperty(this, "vy", void 0);

    _defineProperty(this, "vxb", void 0);

    _defineProperty(this, "gravity", void 0);

    _defineProperty(this, "bounce", void 0);

    _defineProperty(this, "mode", void 0);

    this.sprite = new PIXI.Sprite(texture);
    this.size = size;
    this.x = posX + x;
    this.y = posY + y;
    this.sprite.width = this.sprite.height = this.size;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.gravity = 0.6;
    this.bounce = randomizer(-.7, -0.3);
    this.mode = 0;
    this.vx = 0;
    this.vy = 0;
    this.vxb = randomizer(-2, 2);
  }

  _createClass(Particle, [{
    key: "update",
    value: function update(bottom) {
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;

      if (this.mode) {
        this.x += this.vxb; // this.size = 30
        // this.sprite.width = this.sprite.height = this.size
      }

      if (this.y + this.size > bottom) {
        this.mode = 1;
        this.y = bottom - this.size;
        this.vy *= this.bounce;
      }

      this.sprite.x = this.x;
      this.sprite.y = this.y;
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./src/render/stack/states/StartState/dependencies/Wave.ts":
/*!*****************************************************************!*\
  !*** ./src/render/stack/states/StartState/dependencies/Wave.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wave; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wave = /*#__PURE__*/function () {
  function Wave(texture, i, randomizer) {
    _classCallCheck(this, Wave);

    _defineProperty(this, "sprite", void 0);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "speed", void 0);

    _defineProperty(this, "moving", void 0);

    this.sprite = new PIXI.Sprite(texture);
    this.sprite.width = 300;
    this.sprite.height = 300;
    this.x = i * 70 - 150;
    this.y = 0;
    this.speed = 0.05;
    this.moving = randomizer(0, 50);
  }

  _createClass(Wave, [{
    key: "update",
    value: function update(bottom) {
      this.moving += this.speed;
      this.y += 0.1 * Math.sin(this.moving);
      this.sprite.y = bottom - 50 + this.y;
      this.sprite.x = this.x;
    }
  }]);

  return Wave;
}();



/***/ }),

/***/ "./src/render/stack/states/State.ts":
/*!******************************************!*\
  !*** ./src/render/stack/states/State.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    _defineProperty(this, "stage", void 0);

    this.stage = new PIXI.Container();
    this.stage.visible = false;
  }

  _createClass(State, [{
    key: "show",
    value: function show() {
      this.stage.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.stage.visible = false;
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./src/services/Services.ts":
/*!**********************************!*\
  !*** ./src/services/Services.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var _services_storage_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/storage/StorageService */ "./src/services/storage/StorageService.ts");
/* harmony import */ var _services_setup_SetupService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/setup/SetupService */ "./src/services/setup/SetupService.ts");
/* harmony import */ var _services_emit_EmitService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/emit/EmitService */ "./src/services/emit/EmitService.ts");
/* harmony import */ var _services_status_StatusService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/status/StatusService */ "./src/services/status/StatusService.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Services = function Services(options) {
  _classCallCheck(this, Services);

  _defineProperty(this, "history", void 0);

  _defineProperty(this, "setup", void 0);

  _defineProperty(this, "storage", void 0);

  _defineProperty(this, "emit", void 0);

  _defineProperty(this, "status", void 0);

  this.history = [];
  this.storage = new _services_storage_StorageService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.setup = new _services_setup_SetupService__WEBPACK_IMPORTED_MODULE_1__["default"](options);
  this.emit = new _services_emit_EmitService__WEBPACK_IMPORTED_MODULE_2__["default"](options.PORTS);
  this.status = new _services_status_StatusService__WEBPACK_IMPORTED_MODULE_3__["default"]();
};



/***/ }),

/***/ "./src/services/emit/EmitService.ts":
/*!******************************************!*\
  !*** ./src/services/emit/EmitService.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmitService; });
/* harmony import */ var _Socket_Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket/Socket */ "./src/services/emit/Socket/Socket.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EmitService = /*#__PURE__*/function () {
  function EmitService(PORTS) {
    _classCallCheck(this, EmitService);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "provider", void 0);

    _defineProperty(this, "store", void 0);

    this.socket = new _Socket_Socket__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.provider = 'kek';
    this.store = 'lol';
  }

  _createClass(EmitService, [{
    key: "log",
    value: function log() {
      console.log(123);
    }
  }]);

  return EmitService;
}();



/***/ }),

/***/ "./src/services/emit/Socket/Socket.ts":
/*!********************************************!*\
  !*** ./src/services/emit/Socket/Socket.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Socket; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _messages_GET_PLAYERS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/GET_PLAYERS */ "./src/services/emit/Socket/messages/GET_PLAYERS.ts");
/* harmony import */ var _messages_GET_NEW_PLAYER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/GET_NEW_PLAYER */ "./src/services/emit/Socket/messages/GET_NEW_PLAYER.ts");
/* harmony import */ var _messages_PLAYER_MOVED__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/PLAYER_MOVED */ "./src/services/emit/Socket/messages/PLAYER_MOVED.ts");
/* harmony import */ var _messages_PLAYER_DISCONNECTED__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/PLAYER_DISCONNECTED */ "./src/services/emit/Socket/messages/PLAYER_DISCONNECTED.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Socket = /*#__PURE__*/function () {
  function Socket() {
    _classCallCheck(this, Socket);

    _defineProperty(this, "players", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "API", void 0);

    _defineProperty(this, "connected", void 0);

    this.players = {};
    this.url;
    this.API;
    this.connected = false;
  }

  _createClass(Socket, [{
    key: "changeTo",
    value: function () {
      var _changeTo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.close();

              case 2:
                this.players = {};
                this.open(url);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeTo(_x) {
        return _changeTo.apply(this, arguments);
      }

      return changeTo;
    }()
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.url = url;
                _context2.next = 3;
                return new WebSocket(this.url);

              case 3:
                this.API = _context2.sent;

                this.API.onmessage = function (e) {
                  return _this.onMessage(e.data);
                };

                this.API.onopen = function () {
                  return _this.API.send(JSON.stringify({
                    type: 'open',
                    playerData: {
                      name: _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.name,
                      cell: _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.cell,
                      texture: _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.texture,
                      textureX: _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.textureX,
                      textureY: _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState.player.textureY
                    }
                  }));
                };

                this.connected = true;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function open(_x2) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "close",
    value: function close() {
      this.connected = false;
      this.API.close();
    }
  }, {
    key: "onMessage",
    value: function () {
      var _onMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var _JSON$parse, type, message;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _JSON$parse = JSON.parse(data), type = _JSON$parse.type, message = _JSON$parse.message; // if (type === 'action') {
                // } 

                if (type === 'players') Object(_messages_GET_PLAYERS__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, JSON.parse(data));else if (type === 'newPlayer') Object(_messages_GET_NEW_PLAYER__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, JSON.parse(data));else if (type === 'playerMoved') Object(_messages_PLAYER_MOVED__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, JSON.parse(data));else if (type === 'playerDisconected') Object(_messages_PLAYER_DISCONNECTED__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _index__WEBPACK_IMPORTED_MODULE_0__["game"].stack.playState, JSON.parse(data));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onMessage(_x3) {
        return _onMessage.apply(this, arguments);
      }

      return onMessage;
    }()
  }]);

  return Socket;
}();



/***/ }),

/***/ "./src/services/emit/Socket/messages/GET_NEW_PLAYER.ts":
/*!*************************************************************!*\
  !*** ./src/services/emit/Socket/messages/GET_NEW_PLAYER.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_actors_Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/actors/Player/Player */ "./src/entities/actors/Player/Player.ts");

/* harmony default export */ __webpack_exports__["default"] = (function (socket, playState, data) {
  socket.players[data.message.name] = data.message;
  console.log(data);
  var newPlayer = new _entities_actors_Player_Player__WEBPACK_IMPORTED_MODULE_0__["default"](socket.players[data.message.name]);
  newPlayer.sprite.parentGroup = playState.actorsGroup;
  playState.map.actors.push(newPlayer);
  playState.stage.addChild(newPlayer.sprite);
  playState.resize();
  playState.pivot();
});

/***/ }),

/***/ "./src/services/emit/Socket/messages/GET_PLAYERS.ts":
/*!**********************************************************!*\
  !*** ./src/services/emit/Socket/messages/GET_PLAYERS.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_actors_Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/actors/Player/Player */ "./src/entities/actors/Player/Player.ts");

/* harmony default export */ __webpack_exports__["default"] = (function (players, playState, data) {
  players = data.message;

  for (var player in players) {
    playState.map.actors.push(new _entities_actors_Player_Player__WEBPACK_IMPORTED_MODULE_0__["default"](players[player]));
  }

  playState.stage.addChild(playState.map.layers.after);
  playState.map.actors.forEach(function (actor) {
    console.log(actor);
    actor.sprite.parentGroup = playState.actorsGroup;
    playState.stage.addChild(actor.sprite);
    actor.occupy(playState);
  });
  playState.stage.addChild(playState.map.layers.before);
  playState.resize();
  playState.pivot();
});

/***/ }),

/***/ "./src/services/emit/Socket/messages/PLAYER_DISCONNECTED.ts":
/*!******************************************************************!*\
  !*** ./src/services/emit/Socket/messages/PLAYER_DISCONNECTED.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (socket, playState, data) {
  delete socket.players[data.message];
  var player = playState.map.actors.find(function (actor) {
    return actor.name === data.message && actor.constructor.name === 'Player';
  });
  playState.stage.removeChild(player.sprite);
  playState.map.actors = playState.map.actors.filter(function (actor) {
    return actor !== player;
  });
});

/***/ }),

/***/ "./src/services/emit/Socket/messages/PLAYER_MOVED.ts":
/*!***********************************************************!*\
  !*** ./src/services/emit/Socket/messages/PLAYER_MOVED.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (socket, playState, data) {
  socket.players[data.message.name] = data.message;
  var player = playState.map.actors.find(function (actor) {
    return actor.name === data.message.name && actor.constructor.name === 'Player';
  });
  player.move(socket.players[data.message.name].cell); // playState
});

/***/ }),

/***/ "./src/services/setup/SetupService.ts":
/*!********************************************!*\
  !*** ./src/services/setup/SetupService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupService; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @index */ "./index.ts");
/* harmony import */ var _supplements_loadPreviewAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplements/_loadPreviewAsset */ "./src/services/setup/supplements/_loadPreviewAsset.ts");
/* harmony import */ var _supplements_loadPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplements/_loadPlayer */ "./src/services/setup/supplements/_loadPlayer.ts");
/* harmony import */ var _supplements_loadTilesets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplements/_loadTilesets */ "./src/services/setup/supplements/_loadTilesets.ts");
/* harmony import */ var _supplements_loadMaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplements/_loadMaps */ "./src/services/setup/supplements/_loadMaps.ts");
/* harmony import */ var _supplements_createTextures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplements/_createTextures */ "./src/services/setup/supplements/_createTextures.ts");
/* harmony import */ var _supplements_createLocations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplements/_createLocations */ "./src/services/setup/supplements/_createLocations.ts");
/* harmony import */ var _supplements_build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplements/_build */ "./src/services/setup/supplements/_build.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var SetupService = /*#__PURE__*/function () {
  function SetupService(options) {
    _classCallCheck(this, SetupService);

    _defineProperty(this, "options", void 0);

    this.options = options;
  }

  _createClass(SetupService, [{
    key: "loadPreviewAsset",
    value: function loadPreviewAsset() {
      return Object(_supplements_loadPreviewAsset__WEBPACK_IMPORTED_MODULE_1__["default"])(SetupService.loader(), SetupService.xhrTypes, _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage);
    }
  }, {
    key: "loadPlayer",
    value: function loadPlayer() {
      return Object(_supplements_loadPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])(SetupService.loader(), SetupService.xhrTypes, _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage, this.options);
    }
  }, {
    key: "loadTilesets",
    value: function loadTilesets(tilesets) {
      return Object(_supplements_loadTilesets__WEBPACK_IMPORTED_MODULE_3__["default"])(SetupService.loader(), SetupService.xhrTypes, _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage, this.options, tilesets);
    } // loadCharacters() {}
    // loadPortrets() {}

  }, {
    key: "loadMaps",
    value: function loadMaps() {
      var maps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage.player.adjacentMaps;
      return Object(_supplements_loadMaps__WEBPACK_IMPORTED_MODULE_4__["default"])(SetupService.loader(), SetupService.xhrTypes, _index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage, this.options, maps);
    }
  }, {
    key: "createTextures",
    value: function createTextures() {
      return Object(_supplements_createTextures__WEBPACK_IMPORTED_MODULE_5__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage);
    }
  }, {
    key: "createLocations",
    value: function createLocations() {
      return Object(_supplements_createLocations__WEBPACK_IMPORTED_MODULE_6__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["game"].services.storage);
    }
  }, {
    key: "build",
    value: function build() {
      return Object(_supplements_build__WEBPACK_IMPORTED_MODULE_7__["default"])(_index__WEBPACK_IMPORTED_MODULE_0__["game"]);
    }
  }]);

  return SetupService;
}();

_defineProperty(SetupService, "loader", function () {
  return new PIXI.Loader();
});

_defineProperty(SetupService, "xhrTypes", {
  JSON: PIXI.LoaderResource.XHR_RESPONSE_TYPE.JSON,
  BLOB: PIXI.LoaderResource.XHR_RESPONSE_TYPE.BLOB
});



/***/ }),

/***/ "./src/services/setup/supplements/_build.ts":
/*!**************************************************!*\
  !*** ./src/services/setup/supplements/_build.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_actors_Hero_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/actors/Hero/Hero */ "./src/entities/actors/Hero/Hero.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref.apply(this, arguments);
});

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(game) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!game.services.status.builded) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            game.stack.stage.addChild(new PIXI.display.Layer(game.stack.playState.actorsGroup));
            game.stack.playState.player = new _entities_actors_Hero_Hero__WEBPACK_IMPORTED_MODULE_0__["default"](game.services.storage.player);
            console.log(game.services.storage.player);
            game.stack.playState.target = game.stack.playState.player;
            game.stack.playState.target.isTarget = true;
            game.stack.playState.map = game.services.storage.locations[game.stack.playState.player.location];
            game.stack.playState.map.actors.push(game.stack.playState.player);
            game.services.emit.socket.open(game.stack.playState.map.port); // game.stack.playState.stage.addChild(game.stack.playState.map.layers.after)
            // game.services.emit.socket.
            // game.stack.playState.map.actors.forEach((actor: any) => {
            //     actor.sprite.parentGroup = game.stack.playState.actorsGroup
            //     game.stack.playState.stage.addChild(actor.sprite)
            //     actor.occupy(game.stack.playState)
            // })
            // game.stack.playState.stage.addChild(game.stack.playState.map.layers.before)

            game.stack.playState.resize();
            game.stack.playState.pivot();
            game.stack.startState.hide();
            game.engine.remove(game.engine.loops.preview.loop);
            game.stack.stage.filters = [];
            game.stack.playState.show();
            game.stack.GUI.show();
            game.stack.GUI.HUD.resize();
            game.engine.add(game.engine.loops.game.loop);
            game.controller.bindKeys();
            window.addEventListener('keyup', function (event) {
              return game.controller.keyDownUp(event);
            });
            window.addEventListener('keydown', function (event) {
              return game.controller.keyDownUp(event);
            });
            game.services.status.builded = true;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

/***/ }),

/***/ "./src/services/setup/supplements/_createLocations.ts":
/*!************************************************************!*\
  !*** ./src/services/setup/supplements/_createLocations.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_actors_NPC_Friend_Friend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/actors/NPC/Friend/Friend */ "./src/entities/actors/NPC/Friend/Friend.ts");
/* harmony import */ var _entities_actors_NPC_Enemy_Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/actors/NPC/Enemy/Enemy */ "./src/entities/actors/NPC/Enemy/Enemy.ts");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (function (storage) {
  return new Promise(function (resolve) {
    var _loop = function _loop(json) {
      var name = storage._maps[json].name;
      if (name in storage.locations) return "continue";
      var map = JSON.parse(storage._maps[json].data);
      var props = {};

      if ('properties' in map) {
        var _iterator = _createForOfIteratorHelper(map.properties),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var property = _step.value;
            props[property.name] = property.value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      /* apply basic textures in proper order */


      var texturesArray = [null];

      var _iterator2 = _createForOfIteratorHelper(map.tilesets),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var set = _step2.value;
          texturesArray = texturesArray.concat(storage.textures.landscape[set.source]);
        }
        /* collision initialize */

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var collision = [];

      for (var c = 0; c < map.height; c++) {
        collision[c] = [];

        for (var r = 0; r < map.width; r++) {
          collision[c][r] = 1;
        }
      }
      /* map layers initialization */


      var afterLayer = new PIXI.tilemap.CompositeRectTileLayer(16, texturesArray);
      var beforeLayer = new PIXI.tilemap.CompositeRectTileLayer(16, texturesArray);
      var objects = {
        adjacent: {},
        actors: []
      };
      /* drawing frames on map and register map objects */

      map.layers.filter(function (layer) {
        return 'objects' in layer;
      }).forEach(function (layer) {
        return registerObject(layer, objects);
      });
      map.layers.filter(function (layer) {
        return 'data' in layer;
      }).forEach(function (layer) {
        var props = {};

        var _iterator3 = _createForOfIteratorHelper(layer.properties),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _property = _step3.value;
            props[_property.name] = _property.value;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var temp = layer.name.includes('Before') ? beforeLayer : afterLayer;

        for (var t = 0; t < layer.data.length; t++) {
          if (layer.data[t]) {
            var col = Math.floor(t / layer.width);
            var row = t % layer.width;
            temp.addFrame(layer.data[t], row * map.tilewidth, col * map.tileheight);
            /* add collision */

            if (props.collision) collision[col][row] = 0;
          }
        }
      });
      /* cache map into "maps" object */

      storage.locations[name] = {
        layers: {
          after: afterLayer,
          before: beforeLayer
        },
        collision: collision,
        size: {
          w: map.width,
          h: map.height
        },
        adjacent: objects.adjacent,
        actors: objects.actors,
        port: objects.port,
        lesson: props.lesson ? 'lesson' : null
      };
    };

    for (var json in storage._maps) {
      var _ret = _loop(json);

      if (_ret === "continue") continue;
    }

    console.log('createLocations');
    return resolve();
  });
});

function registerObject(layer, objects) {
  var name = layer.name;

  switch (name) {
    case 'locations':
      {
        var _iterator4 = _createForOfIteratorHelper(layer.objects),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var location = _step4.value;
            var props = {};

            var _iterator5 = _createForOfIteratorHelper(location.properties),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var property = _step5.value;
                props[property.name] = property.value;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            objects.adjacent[location.name] = {
              entry: {
                x: location.x / 16,
                y: location.y / 16
              },
              to: {
                x: props.cellX,
                y: props.cellY
              }
            };
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        break;
      }

    case 'actors':
      {
        var _iterator6 = _createForOfIteratorHelper(layer.objects),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var actor = _step6.value;
            var _props = {};

            var _iterator7 = _createForOfIteratorHelper(actor.properties),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _property2 = _step7.value;
                _props[_property2.name] = _property2.value;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            var data = {
              name: actor.name,
              cell: {
                x: actor.x / 16,
                y: actor.y / 16
              }
            };
            _props.type === 'friend' ? objects.actors.push(new _entities_actors_NPC_Friend_Friend__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign(data, _props))) : objects.actors.push(new _entities_actors_NPC_Enemy_Enemy__WEBPACK_IMPORTED_MODULE_1__["default"](Object.assign(data, _props)));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        break;
      }

    case 'port':
      {
        // console.log(layer.objects)
        objects.port = 'ws://localhost:' + layer.objects; // console.log(objects)
      }
  }
}

/***/ }),

/***/ "./src/services/setup/supplements/_createTextures.ts":
/*!***********************************************************!*\
  !*** ./src/services/setup/supplements/_createTextures.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (storage) {
  return new Promise(function (resolve) {
    for (var category in storage._tilesets) {
      for (var tileset in storage._tilesets[category]) {
        if (tileset in storage.textures[category]) continue;
        var _storage$_tilesets$ca = storage._tilesets[category][tileset],
            texture = _storage$_tilesets$ca.texture,
            data = _storage$_tilesets$ca.data,
            metadata = _storage$_tilesets$ca.metadata;
        var baseTexture = PIXI.BaseTexture.from(data);
        storage.textures[category][tileset] = [];

        for (var c = 0; c < texture.orig.height / metadata.h; c++) {
          for (var r = 0; r < texture.orig.width / metadata.w; r++) {
            var _texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(r * metadata.w, c * metadata.h, metadata.w, metadata.h));

            storage.textures[category][tileset].push(_texture);
          }
        }
      }
    }

    console.log('createTexture');
    return resolve();
  });
});

/***/ }),

/***/ "./src/services/setup/supplements/_loadMaps.ts":
/*!*****************************************************!*\
  !*** ./src/services/setup/supplements/_loadMaps.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function (loader, xhrType, storage, options, maps) {
  return new Promise(function (resolve) {
    var _iterator = _createForOfIteratorHelper(maps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var map = _step.value;
        if (map in storage._maps) continue;
        loader.add("".concat(map), "http://localhost:".concat(options.PORTS.PROVIDER, "/maps/").concat(map), xhrType.JSON);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    loader.load(function (_, maps) {
      for (var map in maps) {
        storage._maps[map] = maps[map];
      }

      console.log('loadMaps');
      return resolve();
    });
  });
});

/***/ }),

/***/ "./src/services/setup/supplements/_loadPlayer.ts":
/*!*******************************************************!*\
  !*** ./src/services/setup/supplements/_loadPlayer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (loader, xhrType, storage, OPTIONS) {
  return new Promise(function (resolve) {
    return loader.add('player', "http://localhost:".concat(OPTIONS.PORTS.PROVIDER, "/player"), {
      xhrType: xhrType.JSON
    }).load(function (_, json) {
      storage.player = json.player.data;
      console.log('loadPlayer');
      return resolve();
    });
  });
});

/***/ }),

/***/ "./src/services/setup/supplements/_loadPreviewAsset.ts":
/*!*************************************************************!*\
  !*** ./src/services/setup/supplements/_loadPreviewAsset.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (loader, xhrType, storage) {
  return new Promise(function (resolve) {
    return loader.add('player', 'http://localhost:8080/player', {
      xhrType: xhrType.BLOB
    }).load(function (_, json) {
      storage.player = json.player.data;
      console.log('loadPlayer');
      return resolve();
    });
  });
});

/***/ }),

/***/ "./src/services/setup/supplements/_loadTilesets.ts":
/*!*********************************************************!*\
  !*** ./src/services/setup/supplements/_loadTilesets.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function (loader, xhrType, storage, options, tilesets) {
  return new Promise(function (resolve) {
    var _iterator = _createForOfIteratorHelper(tilesets),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tileset = _step.value;
        var category = tileset.url.slice(31, -tileset.tag.length - 1);
        if (tileset in storage._tilesets[category]) continue;
        loader.add(tileset.tag, tileset.url, {
          xhrType: xhrType.BLOB,
          metadata: Object.assign(options.GAME_OPTIONS[category], {
            category: category
          })
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    loader.load(function (_, tilesets) {
      for (var tileset in tilesets) {
        storage._tilesets[tilesets[tileset].metadata.category][tileset] = tilesets[tileset];
      }

      console.log('loadTilesets');
      resolve();
    });
  });
});

/***/ }),

/***/ "./src/services/status/StatusService.ts":
/*!**********************************************!*\
  !*** ./src/services/status/StatusService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StatusService = function StatusService() {
  _classCallCheck(this, StatusService);

  _defineProperty(this, "builded", void 0);

  _defineProperty(this, "setupProgress", void 0);

  this.builded = false;
  this.setupProgress = 0;
};



/***/ }),

/***/ "./src/services/storage/StorageService.ts":
/*!************************************************!*\
  !*** ./src/services/storage/StorageService.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StorageService = /*#__PURE__*/function () {
  function StorageService() {
    _classCallCheck(this, StorageService);

    _defineProperty(this, "player", void 0);

    _defineProperty(this, "textures", void 0);

    _defineProperty(this, "locations", void 0);

    _defineProperty(this, "_tilesets", void 0);

    _defineProperty(this, "_maps", void 0);

    this.player;
    this._maps = {};
    this.locations = {};
    this._tilesets = {
      landscape: {},
      animated: {},
      actors: {},
      portrets: {}
    };
    this.textures = {
      landscape: {},
      animated: {},
      actors: {},
      portrets: {}
    };
  }

  _createClass(StorageService, [{
    key: "getRaw",
    value: function getRaw() {
      return {
        player: this.player,
        tilesets: this._tilesets,
        maps: this._maps
      };
    }
  }, {
    key: "getProcessed",
    value: function getProcessed() {
      return {
        player: this.player,
        textures: this.textures,
        locations: this.locations
      };
    }
  }]);

  return StorageService;
}();



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
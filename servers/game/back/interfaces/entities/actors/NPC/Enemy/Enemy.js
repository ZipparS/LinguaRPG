"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialogue = void 0;
var Actor_1 = __importDefault(require("../../Actor"));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(description, combat) {
        var _this = _super.call(this, description) || this;
        _this.combat = combat;
        return _this;
    }
    return Enemy;
}(Actor_1.default));
exports.default = Enemy;
var Dialogue = /** @class */ (function () {
    function Dialogue(dialogue) {
        return dialogue;
    }
    return Dialogue;
}());
exports.Dialogue = Dialogue;
//# sourceMappingURL=Enemy.js.map
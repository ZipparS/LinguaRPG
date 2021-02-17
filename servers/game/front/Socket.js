"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var Socket = /** @class */ (function () {
    function Socket(port) {
        this.connections = {};
        this.wss = new ws_1.default.Server({ port: port });
        this.wss.on('connection', function (ws) {
            console.log("new connection to " + port);
            var connection;
            ws.on('message', function (data) {
            });
            ws.on('close', function () {
            });
        });
    }
    return Socket;
}());
exports.default = Socket;
//# sourceMappingURL=Socket.js.map
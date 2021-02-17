"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var PORT = process.env.PORT || 8080;
var REDIS_PORT = process.env.REDIS_PORT || 6379;
var express_1 = __importDefault(require("express"));
var redis_1 = __importDefault(require("redis"));
var path_1 = require("path");
var app = express_1.default();
app.use(express_1.default.static(path_1.resolve(__dirname, './public')));
var subscriber = redis_1.default.createClient(Number(REDIS_PORT));
var publisher = redis_1.default.createClient(Number(REDIS_PORT));
var WS_CHANNEL = 'ws:message';
subscriber.on('message', function (channel, message) {
    console.log("Message from: " + channel + ", " + message);
});
subscriber.subscribe(WS_CHANNEL);
publisher.publish(WS_CHANNEL, 'my message');
/////////////////////////
// SOCKETS
/////////////////////////
app.listen(PORT, function () {
    console.log("Server started on port " + PORT + " :)");
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const img_api_1 = __importDefault(require("./api/img-api"));
const mainRoute = express_1.default.Router();
mainRoute.get('/', (_, res) => {
    res.send('<p>Hello</p>');
});
mainRoute.use('/imgs', img_api_1.default);
exports.default = mainRoute;

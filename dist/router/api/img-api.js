"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("../../utils");
const imgs = express_1.default.Router();
imgs.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename: fileName, width, height } = req.query;
    const imageTransformed = yield (0, utils_1.resizeImage)(fileName, width, height);
    imageTransformed === null || imageTransformed === void 0 ? void 0 : imageTransformed.toFile(`./thumbs/${fileName}-${width}-${height}.jpg`, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            res.send('Had error.');
            return;
        }
        imageTransformed.toBuffer();
        imageTransformed.pipe(res.status(200));
    }));
    // res.send(
    // 	`<img src ='http://localhost:3000/imgs/${fileName}.jpg' width = ${width} height=${height} />`
    // );
}));
exports.default = imgs;
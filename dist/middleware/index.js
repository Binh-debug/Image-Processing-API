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
exports.handlerError = void 0;
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const handlerError = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename: fileName, width, height } = req.query;
    const originalPath = `${fileName}-${width}-${height}`;
    const isExistImageInThumb = yield (0, utils_1.checkImageExistInThumbs)(originalPath);
    if (isExistImageInThumb) {
        const options = {
            root: path_1.default.join('thumbs')
        };
        res.sendFile(`${fileName}-${width}-${height}.jpg`, options, (err) => {
            if (err) {
                next(err);
            }
            else {
                console.log('Sent:', fileName, 'from caching');
            }
        });
    }
    else {
        const isExistImage = yield (0, utils_1.checkImageExist)(fileName);
        if (!isExistImage) {
            res.send('Filename Incorrect!');
            return;
        }
        if (isNaN(Number(width)) ||
            isNaN(Number(height)) ||
            Number(width) <= 0 ||
            Number(height) <= 0) {
            res.send('Incorrect Parameters!');
            return;
        }
        next();
    }
});
exports.handlerError = handlerError;

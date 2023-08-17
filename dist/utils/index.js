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
exports.checkImageExistInThumbs = exports.checkImageExist = exports.resizeImage = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = (fileName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const getImage = `./imgs/${fileName}.jpg`;
    try {
        const transform = yield (0, sharp_1.default)(getImage);
        if (Number(width) > 0 && Number(height) > 0) {
            transform.resize(Number(width), Number(height));
        }
        return transform;
    }
    catch (e) {
        console.log(e);
    }
});
exports.resizeImage = resizeImage;
const checkImageExist = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    const imageList = yield (0, fs_1.readdirSync)('./imgs');
    const imageNameList = imageList.map((image) => image.split('.')[0]);
    return imageNameList.includes(fileName);
});
exports.checkImageExist = checkImageExist;
const checkImageExistInThumbs = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const imageList = yield (0, fs_1.readdirSync)('./thumbs');
    const imageNameList = imageList.map((image) => image.split('.')[0]);
    return imageNameList.includes(path);
});
exports.checkImageExistInThumbs = checkImageExistInThumbs;

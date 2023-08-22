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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
describe('Check Image Exist In Img Folder', () => {
    it('Image does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, utils_1.checkImageExist)('noexistfile');
        expect(result).toBe(false);
    }));
    it('Image Exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, utils_1.checkImageExist)('encenadaport');
        expect(result).toBe(true);
    }));
});
describe('Check Error Resize', () => {
    it('Get a sharp file.', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, sharp_1.default)(path_1.default.join('imgs/encenadaport.jpg'));
        })).not.toThrow();
    }));
    it('Should resize image is correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.resizeImage)('encenadaport', '200', '200');
        })).toEqual(sharp_1.default);
    }));
});

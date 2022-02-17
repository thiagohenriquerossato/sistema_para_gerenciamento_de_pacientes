"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
exports.default = {
    upload: function (folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: path_1.resolve(__dirname, "..", "..", folder),
                filename: function (request, file, callback) {
                    var fileHash = crypto_1.default.randomBytes(16).toString("hex");
                    var fileName = fileHash + "-" + file.originalname;
                    return callback(null, fileName);
                },
            }),
        };
    },
};

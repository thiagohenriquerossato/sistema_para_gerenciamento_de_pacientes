"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
exports.default = {
    compressImage: function (path, size) {
        var newPath = path.split(".")[0] + ".webp";
        console.log(newPath);
        return sharp_1.default(path)
            .resize(size)
            .toFormat("webp")
            .webp({
            quality: 80,
        })
            .toBuffer()
            .then(function (data) {
            fs_1.default.access(path, function (err) {
                if (!err) {
                    fs_1.default.unlink(path, function (err) {
                        if (err)
                            console.log(err);
                    });
                }
            });
            fs_1.default.writeFile(newPath, data, function (err) {
                if (err) {
                    throw err;
                }
            });
            return newPath;
        });
    },
};

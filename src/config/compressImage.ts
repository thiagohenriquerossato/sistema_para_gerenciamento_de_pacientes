import fs from "fs";
import sharp from "sharp";

export default {
    compressImage(path: string, size: number): any {
        const newPath = `${path.split(".")[0]}.webp`;
        return sharp(path)
            .resize(size)
            .toFormat("webp")
            .webp({
                quality: 80,
            })
            .toBuffer()
            .then((data) => {
                fs.access(path, (err) => {
                    if (!err) {
                        fs.unlink(path, (err) => {
                            if (err) console.log(err);
                        });
                    }
                });
                fs.writeFile(newPath, data, (err) => {
                    if (err) {
                        throw err;
                    }
                });
                return newPath;
            });
    },
};

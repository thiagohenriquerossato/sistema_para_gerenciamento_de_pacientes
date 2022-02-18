import { NextFunction, Request, Response } from "express";

import compress from "../config/compressImage";

export async function compressImg(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { file } = request;
    const path = await compress.compressImage(file.path, 300);
    request.file.path = path;
    const newFileName = `${request.file.filename.split(".")[0]}.webp`;
    request.file.filename = newFileName;

    return next();
}

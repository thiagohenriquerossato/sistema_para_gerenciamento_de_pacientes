import { UploadApiResponse } from "cloudinary";
import { NextFunction, Request, Response } from "express";

import cloudinary from "../utils/cloudinary";

export async function uploadCloudinary(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        const { file } = request;

        const uploadResponse: UploadApiResponse = await cloudinary.v2.uploader.upload(
            file.path,
            {
                upload_preset: "syspet_images_tutores",
            }
        );
        request.file.originalname = uploadResponse.url;
    } catch (err) {
        console.log(err);
    }

    return nextFunction();
}

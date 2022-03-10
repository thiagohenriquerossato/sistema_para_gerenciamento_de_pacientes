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
        const origin = request.originalUrl;

        let upload_preset: string;

        if (origin.includes("tutor")) upload_preset = "syspet_images_tutores";
        if (origin.includes("animal")) upload_preset = "syspet_images_pets";

        const uploadResponse: UploadApiResponse = await cloudinary.v2.uploader.upload(
            file.path,
            {
                upload_preset,
            }
        );
        request.file.originalname = uploadResponse.url;
    } catch (err) {
        response.status(400).send(err);
    }

    return nextFunction();
}

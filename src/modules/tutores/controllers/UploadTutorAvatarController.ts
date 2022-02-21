import { Request, Response } from "express";

import { UploadTutorAvatarService } from "../services/UploadTutorAvatarService";

class UploadTutorAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const avatar = request.file.originalname;
        const { id } = request.params;

        const service = new UploadTutorAvatarService();

        try {
            const result = await service.execute(avatar, id);
            return response.status(204).json(result);
        } catch (error) {
            return response.status(400).send({ errorMessage: error });
        }
    }
}

export { UploadTutorAvatarController };

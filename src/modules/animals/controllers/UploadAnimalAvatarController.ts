import { Request, Response } from "express";

import { UploadAnimalAvatarService } from "../services/UploadAnimalAvatarService";

class UploadAnimalAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const avatar = request.file.filename;
        const { animal_id } = request.params;

        const service = new UploadAnimalAvatarService();

        try {
            const result = await service.execute(avatar, animal_id);
            return response.status(204).send(result);
        } catch (error) {
            return response.status(400).send({ errorMessage: error });
        }
    }
}

export { UploadAnimalAvatarController };

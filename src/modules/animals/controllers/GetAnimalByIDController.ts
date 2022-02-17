import { Request, Response } from "express";

import { GetAnimalByIDService } from "../services/GetAniamlByIDService";

class GetAnimalByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const service = new GetAnimalByIDService();

        try {
            const result = await service.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            return response.status(400).send({ messar: error.message });
        }
    }
}

export { GetAnimalByIDController };

import { Request, Response } from "express";

import { CreateAnimalService } from "../services/CreateAnimalService";

class CreateAnimalController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            species,
            name,
            birth,
            weight,
            breed,
            gender,
            pre_existing_diseases,
        } = request.body;

        const { id } = request.params;

        const service = new CreateAnimalService();

        try {
            const result = await service.execute(
                {
                    species,
                    name,
                    birth,
                    weight,
                    breed,
                    gender,
                    pre_existing_diseases,
                },
                id as string
            );
            return response.status(201).send(result);
        } catch (err) {
            return response.status(400).send({ err });
        }
    }
}

export { CreateAnimalController };

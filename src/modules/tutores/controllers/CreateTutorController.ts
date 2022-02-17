import { Request, Response } from "express";

import { CreateTutorService } from "../services/CreateTutorService";

class CreateTutorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, phone, address } = request.body;
        const service = new CreateTutorService();
        try {
            const result = await service.execute({
                name,
                email,
                phone,
                address,
            });
            return response.status(201).json(result);
        } catch (err) {
            return response.status(400).send({ errorMessage: err });
        }
    }
}

export { CreateTutorController };

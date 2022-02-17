import { Request, Response } from "express";

import { UpdateTutorService } from "../services/UpdateTutorService";

class UpdateTutorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,

            email,

            phone,

            address,
        } = request.body;

        const { tutor_id } = request.params;

        const service = new UpdateTutorService();

        try {
            const result = await service.execute(
                {
                    name,

                    email,

                    phone,

                    address,
                },

                tutor_id as string
            );

            return response.status(201).send(result);
        } catch (err) {
            return response.status(400).send({ err });
        }
    }
}

export { UpdateTutorController };

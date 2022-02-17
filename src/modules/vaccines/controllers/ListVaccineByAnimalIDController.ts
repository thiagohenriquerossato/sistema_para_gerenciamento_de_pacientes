import { Request, Response } from "express";

import { ListVaccineByAnimalIDService } from "../services/ListVaccineByAnimalIDService";

class ListVaccineByAnimalIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { animal_id } = request.params;

        const service = new ListVaccineByAnimalIDService();

        try {
            const result = await service.execute(animal_id);

            return response.json(result);
        } catch (error) {
            return response.status(400).send(error.message);
        }
    }
}

export { ListVaccineByAnimalIDController };

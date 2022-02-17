import { Request, Response } from "express";

import { CreateVaccineService } from "../services/CreateVaccineService";

class CreateVaccineController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { next_dose, medicine } = request.body;
        const { animal_id } = request.params;

        const service = new CreateVaccineService();

        try {
            const result = await service.execute(
                {
                    next_dose,
                    medicine,
                },
                animal_id as string
            );

            return response.status(201).json(result);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { CreateVaccineController };

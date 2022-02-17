import { Request, Response } from "express";

import { CreateAppointmentService } from "../services/CreateAppointmentService";

class CreateAppointmentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { date, type } = request.body;

        const { animal_id } = request.params;

        const service = new CreateAppointmentService();
        try {
            const result = await service.execute(date, animal_id, type);

            return response.status(201).json(result);
        } catch (error) {
            return response.json({ message: error.message });
        }
    }
}

export { CreateAppointmentController };

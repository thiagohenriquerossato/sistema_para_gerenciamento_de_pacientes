import { Request, Response } from "express";

import { CancelAppointmentService } from "../services/CancelAppointmentService";

class CancelAppointmentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new CancelAppointmentService();

        try {
            const result = await service.execute(id);

            return response.json(result);
        } catch (error) {
            return response.status(400).send(error.message);
        }
    }
}

export { CancelAppointmentController };

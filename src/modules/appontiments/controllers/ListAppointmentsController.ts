import { Request, Response } from "express";

import { ListAppointmentsService } from "../services/ListAppointmentsService";

class ListAppointmentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new ListAppointmentsService();

        try {
            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.status(400).send(error.message);
        }
    }
}

export { ListAppointmentsController };

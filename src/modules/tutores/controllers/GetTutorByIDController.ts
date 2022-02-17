import { Request, Response } from "express";

import { GetTutorByIDService } from "../services/GetTutorByIDService";

class GetTutorByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new GetTutorByIDService();
        try {
            const result = await service.execute(id);
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { GetTutorByIDController };

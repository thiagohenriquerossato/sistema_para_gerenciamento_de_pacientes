import { Request, Response } from "express";

import { GetTutorByNameService } from "../services/GetTutorByNameService";

class GetTutorByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.params;

        const service = new GetTutorByNameService();
        try {
            const result = await service.execute(name);
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { GetTutorByNameController };

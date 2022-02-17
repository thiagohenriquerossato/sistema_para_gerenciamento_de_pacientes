import { Request, Response } from "express";

import { ListTutoresService } from "../services/ListTutoresService";

class ListTutoresController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new ListTutoresService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { ListTutoresController };

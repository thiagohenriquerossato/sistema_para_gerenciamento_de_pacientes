import { Request, Response } from "express";

import { ListVaccinesService } from "../services/ListVaccinesService";

class ListVaccinesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new ListVaccinesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { ListVaccinesController };

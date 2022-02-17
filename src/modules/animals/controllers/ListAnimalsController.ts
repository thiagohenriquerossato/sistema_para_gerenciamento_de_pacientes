import { Request, Response } from "express";

import { ListAnimalsService } from "../services/ListAnimalsService";

class ListAnimalsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new ListAnimalsService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { ListAnimalsController };

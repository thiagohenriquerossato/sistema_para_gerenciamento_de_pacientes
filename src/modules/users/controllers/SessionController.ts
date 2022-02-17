import { Request, Response } from "express";

import { SessionService } from "../services/SessionService";

class SessionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password } = request.body;

        const service = new SessionService();

        try {
            const result = await service.execute({ name, password });
            return response.status(200).json(result);
        } catch (error) {
            return response.status(400).send({ errorMessage: error });
        }
    }
}

export { SessionController };

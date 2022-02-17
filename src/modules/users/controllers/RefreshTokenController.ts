import { Request, Response } from "express";

import { RefreshTokenService } from "../services/RefreshTokenService";

class RefreshTokenController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } =
            request.body ||
            request.headers["x-access-token"] ||
            request.query.token;

        const service = new RefreshTokenService();
        const refreshToken = await service.execute(token);

        return response.json(refreshToken);
    }
}

export { RefreshTokenController };

import { Router } from "express";

import { RefreshTokenController } from "../modules/users/controllers/RefreshTokenController";
import { SessionController } from "../modules/users/controllers/SessionController";

const sessionRoutes = Router();

sessionRoutes.post("/session", new SessionController().handle);
sessionRoutes.post("/refresh-token", new RefreshTokenController().handle);

export { sessionRoutes };

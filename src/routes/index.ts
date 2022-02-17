import { Router } from "express";

import { animalsRoutes } from "./animals.routes";
import { appointmentRoutes } from "./appointment.routes";
import { sessionRoutes } from "./session.routes";
import { tutoresRoutes } from "./tutores.routes";
import { vaccineRoutes } from "./vaccines.routes";

const router = Router();

router.use("/tutor", tutoresRoutes);
router.use("/animal", animalsRoutes);
router.use("/vaccine", vaccineRoutes);
router.use("/appointment", appointmentRoutes);

router.use(sessionRoutes);

export { router };

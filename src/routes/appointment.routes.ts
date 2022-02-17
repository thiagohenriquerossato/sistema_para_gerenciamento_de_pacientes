import { Router } from "express";

import { CreateAppointmentController } from "../modules/appontiments/controllers/CreateAppointmentController";
import { ListAppointmentsController } from "../modules/appontiments/controllers/ListAppointmentsController";

const appointmentRoutes = Router();

appointmentRoutes.post("/:animal_id", new CreateAppointmentController().handle);
appointmentRoutes.get("/", new ListAppointmentsController().handle);

export { appointmentRoutes };

import { Router } from "express";

import { CancelAppointmentController } from "../modules/appointments/controllers/CancelAppointmentController";
import { CreateAppointmentController } from "../modules/appointments/controllers/CreateAppointmentsController";
import { ListAppointmentsController } from "../modules/appointments/controllers/ListAppointmentsController";

const appointmentRoutes = Router();

appointmentRoutes.post("/:animal_id", new CreateAppointmentController().handle);
appointmentRoutes.post("/cancel/:id", new CancelAppointmentController().handle);

appointmentRoutes.get("/", new ListAppointmentsController().handle);

export { appointmentRoutes };

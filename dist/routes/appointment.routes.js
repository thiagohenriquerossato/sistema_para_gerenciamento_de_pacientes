"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRoutes = void 0;
var express_1 = require("express");
var CreateAppointmentController_1 = require("../modules/appontiments/controllers/CreateAppointmentController");
var ListAppointmentsController_1 = require("../modules/appontiments/controllers/ListAppointmentsController");
var appointmentRoutes = express_1.Router();
exports.appointmentRoutes = appointmentRoutes;
appointmentRoutes.post("/:animal_id", new CreateAppointmentController_1.CreateAppointmentController().handle);
appointmentRoutes.get("/", new ListAppointmentsController_1.ListAppointmentsController().handle);
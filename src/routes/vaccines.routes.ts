import { Router } from "express";

import { CreateVaccineController } from "../modules/vaccines/controllers/CreateVaccineController";
import { ListVaccineByAnimalIDController } from "../modules/vaccines/controllers/ListVaccineByAnimalIDController";
import { ListVaccinesController } from "../modules/vaccines/controllers/ListVaccinesController";

const vaccineRoutes = Router();

vaccineRoutes.post("/:animal_id", new CreateVaccineController().handle);
vaccineRoutes.get("/list", new ListVaccinesController().handle);
vaccineRoutes.get(
    "/list/:animal_id",
    new ListVaccineByAnimalIDController().handle
);

export { vaccineRoutes };

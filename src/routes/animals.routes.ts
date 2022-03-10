import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { compressImg } from "../middlewares/compressImg";
import { uploadCloudinary } from "../middlewares/uploadCloudinary";
import { CreateAnimalController } from "../modules/animals/controllers/CreateAnimalController";
import { GetAnimalByIDController } from "../modules/animals/controllers/GetAnimalByIDController";
import { ListAnimalsController } from "../modules/animals/controllers/ListAnimalsController";
import { UpdateAnimalController } from "../modules/animals/controllers/UpdateAnimalController";
import { UploadAnimalAvatarController } from "../modules/animals/controllers/UploadAnimalAvatarController";

const animalsRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./public/images/animal"));

animalsRoutes.post("/:id", new CreateAnimalController().handle);
animalsRoutes.put("/:id", new UpdateAnimalController().handle);

animalsRoutes.get("/id/:id", new GetAnimalByIDController().handle);

animalsRoutes.get("/", new ListAnimalsController().handle);
animalsRoutes.patch(
    "/avatar/:animal_id",
    uploadAvatar.single("avatar"),
    compressImg,
    uploadCloudinary,
    new UploadAnimalAvatarController().handle
);

export { animalsRoutes };

import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { compressImg } from "../middlewares/compressImg";
import { uploadCloudinary } from "../middlewares/uploadCloudinary";
import { CreateTutorController } from "../modules/tutores/controllers/CreateTutorController";
import { GetTutorByIDController } from "../modules/tutores/controllers/GetTutorByIDController";
import { GetTutorByNameController } from "../modules/tutores/controllers/GetTutorByNameController";
import { ListTutoresController } from "../modules/tutores/controllers/ListTutoresController";
import { UpdateTutorController } from "../modules/tutores/controllers/UpdateTutorController";
import { UploadTutorAvatarController } from "../modules/tutores/controllers/UploadTutorAvatarController";

const tutoresRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./public/images/tutores"));

tutoresRoutes.post("/", new CreateTutorController().handle);
tutoresRoutes.put("/:tutor_id", new UpdateTutorController().handle);

tutoresRoutes.get("/", new ListTutoresController().handle);
tutoresRoutes.get("/id/:id", new GetTutorByIDController().handle);
tutoresRoutes.get("/name/:name", new GetTutorByNameController().handle);
export { tutoresRoutes };

tutoresRoutes.get("/teste", (req, res) => {
    console.log(process.env.CLOUDINARY_API_KEY);
    return res.send();
});

tutoresRoutes.patch(
    "/avatar/:id",
    uploadAvatar.single("avatar"),
    compressImg,
    uploadCloudinary,
    new UploadTutorAvatarController().handle
);

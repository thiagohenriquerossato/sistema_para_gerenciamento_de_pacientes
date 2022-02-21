"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutoresRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var compressImg_1 = require("../middlewares/compressImg");
var uploadCloudinary_1 = require("../middlewares/uploadCloudinary");
var CreateTutorController_1 = require("../modules/tutores/controllers/CreateTutorController");
var GetTutorByIDController_1 = require("../modules/tutores/controllers/GetTutorByIDController");
var GetTutorByNameController_1 = require("../modules/tutores/controllers/GetTutorByNameController");
var ListTutoresController_1 = require("../modules/tutores/controllers/ListTutoresController");
var UpdateTutorController_1 = require("../modules/tutores/controllers/UpdateTutorController");
var UploadTutorAvatarController_1 = require("../modules/tutores/controllers/UploadTutorAvatarController");
var tutoresRoutes = express_1.Router();
exports.tutoresRoutes = tutoresRoutes;
var uploadAvatar = multer_1.default(upload_1.default.upload("./public/images/tutores"));
tutoresRoutes.post("/", new CreateTutorController_1.CreateTutorController().handle);
tutoresRoutes.put("/:tutor_id", new UpdateTutorController_1.UpdateTutorController().handle);
tutoresRoutes.get("/", new ListTutoresController_1.ListTutoresController().handle);
tutoresRoutes.get("/id/:id", new GetTutorByIDController_1.GetTutorByIDController().handle);
tutoresRoutes.get("/name/:name", new GetTutorByNameController_1.GetTutorByNameController().handle);
// tutoresRoutes.patch(
//     "/avatar/:id",
//     uploadAvatar.single("avatar"),
//     compressImg,
//     new UploadTutorAvatarController().handle
// );
tutoresRoutes.patch("/avatar/:id", uploadAvatar.single("avatar"), compressImg_1.compressImg, uploadCloudinary_1.uploadCloudinary, new UploadTutorAvatarController_1.UploadTutorAvatarController().handle);

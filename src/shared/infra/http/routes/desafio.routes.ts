import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateDesafioController } from "@modules/usuario/useCases/createDesafio/CreateDesafioController";
import { EndDesafioController } from "@modules/usuario/useCases/endDesafio/EndDesafioController";
import { ListDesafioController } from "@modules/usuario/useCases/listDesafio/ListDesafioController";
import { StartDesafioController } from "@modules/usuario/useCases/startDesafio/StartDesafioController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const desafioRoutes = Router();

const uploadFoto = multer(uploadConfig.upload("./tmp/desafio"));

const createDesafioController = new CreateDesafioController();
const listDesafioController = new ListDesafioController();
const startDesafioController = new StartDesafioController();
const endDesafioController = new EndDesafioController();

desafioRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    uploadFoto.single("foto"),
    createDesafioController.handle
);

desafioRoutes.post(
    "/startdesafio",
    ensureAuthenticated,
    ensureAdmin,
    startDesafioController.handle
);

desafioRoutes.post(
    "/enddesafio",
    ensureAuthenticated,
    ensureAdmin,
    endDesafioController.handle
);

desafioRoutes.get(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    listDesafioController.handle
);

export { desafioRoutes };

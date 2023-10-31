import { Router } from "express";

import { CreateOracaoController } from "@modules/usuario/useCases/createOracao/CreateOracaoController";
import { CreateUsuarioOracaoController } from "@modules/usuario/useCases/createUsuarioOracao/CreateUsuarioOracaoController";
import { ListOracaoController } from "@modules/usuario/useCases/listOracao/ListOracaoController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const oracaoRoutes = Router();

const createOracaoController = new CreateOracaoController();
const createUsuarioOracaoController = new CreateUsuarioOracaoController();
const listOracaoController = new ListOracaoController();

oracaoRoutes.post("/", ensureAuthenticated, createOracaoController.handle);
oracaoRoutes.get("/", ensureAuthenticated, listOracaoController.handle);
oracaoRoutes.post(
    "/usuarios/:id",
    ensureAuthenticated,
    createUsuarioOracaoController.handle
);

export { oracaoRoutes };

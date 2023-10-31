import { Router } from "express";

import { CreatePropositoController } from "@modules/usuario/useCases/createProposito/CreatePropositoController";
import { ListPropositoController } from "@modules/usuario/useCases/listProposito/ListPropositoController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const propositoRoutes = Router();

const createPropositoController = new CreatePropositoController();
const listPropositoController = new ListPropositoController();

propositoRoutes.post(
    "/",
    ensureAuthenticated,
    createPropositoController.handle
);

propositoRoutes.get("/", ensureAuthenticated, listPropositoController.handle);

export { propositoRoutes };

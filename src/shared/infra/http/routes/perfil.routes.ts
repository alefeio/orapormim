import { Router } from "express";

import { CreatePerfilController } from "@modules/usuario/useCases/createPerfil/CreatePerfilController";
import { ListPerfilController } from "@modules/usuario/useCases/listPerfis/ListPerfisController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const perfilRoutes = Router();

const createPerfilController = new CreatePerfilController();
const listPerfilController = new ListPerfilController();

perfilRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createPerfilController.handle
);

perfilRoutes.get("/", listPerfilController.handle);

export { perfilRoutes };

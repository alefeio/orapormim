import { Router } from "express";

import { AuthenticateUsuarioController } from "@modules/usuario/useCases/authenticateUsuario/AuthenticateUsuarioController";

const authenticateRoutes = Router();

const authenticateUsuarioController = new AuthenticateUsuarioController();

authenticateRoutes.post("/sessions", authenticateUsuarioController.handle);

export { authenticateRoutes };

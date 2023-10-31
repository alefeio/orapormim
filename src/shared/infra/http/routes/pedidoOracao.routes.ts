import { Router } from "express";

import { CreatePedidoOracaoController } from "@modules/usuario/useCases/createPedidoOracao/CreatePedidoOracaoController";
import { ListPedidoOracaoController } from "@modules/usuario/useCases/listPedidoOracao/ListPedidoOracaoController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const pedidoOracaoRoutes = Router();

const createPedidoOracaoController = new CreatePedidoOracaoController();
const listPedidoOracaoController = new ListPedidoOracaoController();

pedidoOracaoRoutes.post(
    "/",
    ensureAuthenticated,
    createPedidoOracaoController.handle
);

pedidoOracaoRoutes.get(
    "/",
    ensureAuthenticated,
    listPedidoOracaoController.handle
);

export { pedidoOracaoRoutes };

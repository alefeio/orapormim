import { Router } from "express";
import multer from "multer";

import { CreateCategoriaController } from "@modules/usuario/useCases/createCategoria/CreateCategoriaController";
import { ImportCategoriaController } from "@modules/usuario/useCases/importCategoria/ImportCategoriaController";
import { ListCategoriaController } from "@modules/usuario/useCases/listCategorias/ListCategoriasController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const categoriaRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoriaController = new CreateCategoriaController();
const importCategoriaController = new ImportCategoriaController();
const listCategoriaController = new ListCategoriaController();

categoriaRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createCategoriaController.handle
);

categoriaRoutes.get("/", listCategoriaController.handle);

categoriaRoutes.post(
    "/import",
    upload.single("file"),
    ensureAuthenticated,
    ensureAdmin,
    importCategoriaController.handle
);

export { categoriaRoutes };

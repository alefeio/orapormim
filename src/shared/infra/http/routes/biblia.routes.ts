import { Router, request, response } from "express";
import multer from "multer";

import { createBibliaController } from "@modules/usuario/useCases/createBiblia/indx";
import { importBibliaController } from "@modules/usuario/useCases/importBiblia";
import { listBibliaController } from "@modules/usuario/useCases/listBiblia";

const bibliaRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

bibliaRoutes.post("/", (request, response) => {
    return createBibliaController.handle(request, response);
});

bibliaRoutes.get("/livros", (request, response) => {
    return listBibliaController.livros(request, response);
});

bibliaRoutes.get("/versos/:versao/:livro/:capitulo", (request, response) => {
    return listBibliaController.versos(request, response);
});

bibliaRoutes.get("/versos/:versao", (request, response) => {
    return listBibliaController.versosRandom(request, response);
});

bibliaRoutes.post("/import", upload.single("file"), (request, response) => {
    return importBibliaController.handle(request, response);
});

export { bibliaRoutes };

import { Router } from "express";

import { CreateRespostaQuizController } from "@modules/usuario/useCases/createRespostaQuiz/CreateRespostaQuizController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const respostaQuizRoutes = Router();

const createRespostaQuizController = new CreateRespostaQuizController();

respostaQuizRoutes.post(
    "/",
    ensureAuthenticated,
    createRespostaQuizController.handle
);

export { respostaQuizRoutes };

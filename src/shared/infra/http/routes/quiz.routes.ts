import { Router } from "express";

import { CreateOpcaoQuizController } from "@modules/usuario/useCases/createOpcaoQuiz/CreateOpcaoQuizController";
import { CreateQuizController } from "@modules/usuario/useCases/createQuiz/CreateQuizController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const quizRoutes = Router();

const createQuizController = new CreateQuizController();

quizRoutes.post(
    "/:id",
    ensureAuthenticated,
    ensureAdmin,
    createQuizController.handle
);

const createOpcaoQuizController = new CreateOpcaoQuizController();

quizRoutes.post(
    "/opcoes/:id",
    ensureAuthenticated,
    ensureAdmin,
    createOpcaoQuizController.handle
);

export { quizRoutes };

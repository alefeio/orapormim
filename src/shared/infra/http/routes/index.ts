import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { bibliaRoutes } from "./biblia.routes";
import { categoriaRoutes } from "./categoria.routes";
import { desafioRoutes } from "./desafio.routes";
import { oracaoRoutes } from "./oracao.routes";
import { pedidoOracaoRoutes } from "./pedidoOracao.routes";
import { perfilRoutes } from "./perfil.routes";
import { portfolioRoutes } from "./portfolio.routes";
import { propositoRoutes } from "./proposito.routes";
import { quizRoutes } from "./quiz.routes";
import { respostaQuizRoutes } from "./respostaQuiz.routes";
import { usuarioRoutes } from "./usuario.routes";

const router = Router();

router.use("/categorias", categoriaRoutes);
router.use("/perfis", perfilRoutes);
router.use("/biblia", bibliaRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/pedidooracao", pedidoOracaoRoutes);
router.use("/proposito", propositoRoutes);
router.use("/oracao", oracaoRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/desafio", desafioRoutes);
router.use("/quiz", quizRoutes);
router.use("/respostaquiz", respostaQuizRoutes);
router.use(authenticateRoutes);

export { router };

import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreatePortfolioController } from "@modules/usuario/useCases/createPortfolio/CreatePortfolioController";
import { ListPortfolioController } from "@modules/usuario/useCases/listPortfolio/ListPortfolioController";
import { UploadImagensPortfolioController } from "@modules/usuario/useCases/uploadImagensPortfolio/UploadImagensPortfolioController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const portfolioRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/portfolio"));

const createPortfolioController = new CreatePortfolioController();
const listPortfolioController = new ListPortfolioController();
const uploadImagensPortfolio = new UploadImagensPortfolioController();

portfolioRoutes.post(
    "/",
    ensureAuthenticated,
    createPortfolioController.handle
);

portfolioRoutes.get("/:id", listPortfolioController.handle);

portfolioRoutes.post(
    "/imagens/:id",
    ensureAuthenticated,
    upload.array("imagens"),
    uploadImagensPortfolio.handle
);

export { portfolioRoutes };

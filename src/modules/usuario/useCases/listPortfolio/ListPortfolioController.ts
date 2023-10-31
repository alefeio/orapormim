import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPortfolioUseCase } from "./ListPortfolioUseCase";

class ListPortfolioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listPortfolioUseCase = container.resolve(ListPortfolioUseCase);

        const portfolios = await listPortfolioUseCase.execute({ id });

        return response.json(portfolios);
    }
}

export { ListPortfolioController };

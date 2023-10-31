import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePortfolioUseCase } from "./CreatePortfolioUseCase";

class CreatePortfolioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: usuario_id } = request.usuario;
        const { titulo, descricao } = request.body;

        const createPortfolioUseCase = container.resolve(
            CreatePortfolioUseCase
        );

        await createPortfolioUseCase.execute({
            usuario_id,
            titulo,
            descricao,
        });

        return response.status(201).send();
    }
}

export { CreatePortfolioController };

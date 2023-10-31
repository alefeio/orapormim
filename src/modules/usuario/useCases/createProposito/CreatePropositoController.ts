import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePropositoUseCase } from "./CreatePropositoUseCase";

class CreatePropositoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: usuario_id } = request.usuario;
        const { descricao } = request.body;

        const createPropositoUseCase = container.resolve(
            CreatePropositoUseCase
        );

        const proposito = await createPropositoUseCase.execute({
            usuario_id,
            descricao,
        });

        return response.status(201).json(proposito);
    }
}

export { CreatePropositoController };

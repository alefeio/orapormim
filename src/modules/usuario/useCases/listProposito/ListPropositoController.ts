import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPropositoUseCase } from "./ListPropositoUseCase";

class ListPropositoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.usuario;

        const listPropositoUseCase = container.resolve(ListPropositoUseCase);

        const propositos = await listPropositoUseCase.execute({ id });

        return response.json(propositos);
    }
}

export { ListPropositoController };

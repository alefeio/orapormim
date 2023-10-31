import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriaUseCase } from "./ListCategoriasUseCase";

class ListCategoriaController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriaUseCase = container.resolve(ListCategoriaUseCase);

        const all = await listCategoriaUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriaController };

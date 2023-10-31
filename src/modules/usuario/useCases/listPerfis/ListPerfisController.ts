import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPerfilUseCase } from "./ListPerfisUseCase";

class ListPerfilController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listPerfilUseCase = container.resolve(ListPerfilUseCase);

        const all = await listPerfilUseCase.execute();

        return response.json(all);
    }
}

export { ListPerfilController };

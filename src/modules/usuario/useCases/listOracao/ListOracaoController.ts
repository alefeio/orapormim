import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListOracaoUseCase } from "./ListOracaoUseCase";

class ListOracaoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listOracaoUseCase = container.resolve(ListOracaoUseCase);

        const all = await listOracaoUseCase.execute();

        return response.json(all);
    }
}

export { ListOracaoController };

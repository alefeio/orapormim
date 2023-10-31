import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDesafioUseCase } from "./ListDesafioUseCase";

class ListDesafioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listDesafioUseCase = container.resolve(ListDesafioUseCase);

        const all = await listDesafioUseCase.execute();

        return response.status(201).json(all);
    }
}

export { ListDesafioController };

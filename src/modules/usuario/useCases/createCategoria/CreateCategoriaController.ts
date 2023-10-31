import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

class CreateCategoriaController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;

        const createCategoriaUseCase = container.resolve(
            CreateCategoriaUseCase
        );
        await createCategoriaUseCase.execute({ nome });
        return response.status(201).send();
    }
}

export { CreateCategoriaController };

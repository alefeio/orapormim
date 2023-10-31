import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePerfilUseCase } from "./CreatePerfilUseCase";

class CreatePerfilController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;

        const createPerfilUseCase = container.resolve(CreatePerfilUseCase);

        await createPerfilUseCase.execute({ nome });

        return response.status(201).send();
    }
}

export { CreatePerfilController };

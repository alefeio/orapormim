import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDesafioUseCase } from "./CreateDesafioUseCase";

class CreateDesafioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, descricao } = request.body;
        const foto = request.file.filename;

        const createDesafioUseCase = container.resolve(CreateDesafioUseCase);

        await createDesafioUseCase.execute({ nome, descricao, foto });

        return response.status(201).send();
    }
}

export { CreateDesafioController };

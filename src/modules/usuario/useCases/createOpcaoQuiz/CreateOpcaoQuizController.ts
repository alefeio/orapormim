import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOpcaoQuizUseCase } from "./CreateOpcaoQuizUseCase";

class CreateOpcaoQuizController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: quiz_id } = request.params;
        const { resposta, correta } = request.body;

        const createOpcaoQuizUseCase = container.resolve(
            CreateOpcaoQuizUseCase
        );

        await createOpcaoQuizUseCase.execute({ quiz_id, resposta, correta });

        return response.status(201).send();
    }
}

export { CreateOpcaoQuizController };

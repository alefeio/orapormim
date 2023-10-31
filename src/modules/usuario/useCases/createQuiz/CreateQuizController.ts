import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuizUseCase } from "./CreateQuizUseCase";

class CreateQuizController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: desafio_id } = request.params;
        const { pergunta } = request.body;

        const createQuizUseCase = container.resolve(CreateQuizUseCase);

        await createQuizUseCase.execute({ desafio_id, pergunta });

        return response.status(201).send();
    }
}

export { CreateQuizController };

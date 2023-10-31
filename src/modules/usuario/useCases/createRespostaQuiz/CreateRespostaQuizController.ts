import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRespostaQuizUseCase } from "./CreateRespostaQuizUseCase";

class CreateRespostaQuizController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: usuario_id } = request.usuario;
        const { quiz_id, pontuacao } = request.body;

        const createRespostaQuizUseCase = container.resolve(
            CreateRespostaQuizUseCase
        );

        const respostaQuiz = await createRespostaQuizUseCase.execute({
            quiz_id,
            usuario_id,
            pontuacao,
        });

        return response.status(201).json(respostaQuiz);
    }
}

export { CreateRespostaQuizController };

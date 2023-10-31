import { inject, injectable } from "tsyringe";

import { RespostaQuiz } from "@modules/usuario/infra/typeorm/entities/RespostaQuiz";
import { IRespostaQuizRepository } from "@modules/usuario/repositories/IRespostaQuizRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    quiz_id: string;
    usuario_id: string;
    pontuacao: number;
}

@injectable()
class CreateRespostaQuizUseCase {
    constructor(
        @inject("RespostaQuizRepository")
        private respostaQuizRepository: IRespostaQuizRepository
    ) { }

    async execute({
        quiz_id,
        usuario_id,
        pontuacao,
    }: IRequest): Promise<RespostaQuiz> {
        const respondeuQuiz = await this.respostaQuizRepository.respondeuQuiz(
            quiz_id,
            usuario_id
        );

        if (respondeuQuiz) {
            throw new AppError("O usuário já respondeu a este Quiz!", 401);
        }

        const respostaQuiz = this.respostaQuizRepository.create({
            quiz_id,
            usuario_id,
            pontuacao,
        });

        return respostaQuiz;
    }
}

export { CreateRespostaQuizUseCase };

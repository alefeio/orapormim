import { inject, injectable } from "tsyringe";

import { Quiz } from "@modules/usuario/infra/typeorm/entities/Quiz";
import { IQuizRepository } from "@modules/usuario/repositories/IQuizRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    desafio_id: string;
    pergunta: string;
}

@injectable()
class CreateQuizUseCase {
    constructor(
        @inject("QuizRepository")
        private quizRepository: IQuizRepository
    ) { }

    async execute({ desafio_id, pergunta }: IRequest): Promise<Quiz> {
        if (!desafio_id) {
            throw new AppError("O argumento desafio_id está ausente!");
        }

        const quiz = await this.quizRepository.create({ desafio_id, pergunta });

        return quiz;
    }
}

export { CreateQuizUseCase };

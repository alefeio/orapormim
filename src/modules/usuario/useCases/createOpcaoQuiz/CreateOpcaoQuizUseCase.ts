import { inject, injectable } from "tsyringe";

import { OpcaoQuiz } from "@modules/usuario/infra/typeorm/entities/OpcaoQuiz";
import { IOpcaoQuizRepository } from "@modules/usuario/repositories/IOpcaoQuizRepository";

interface IRequest {
    quiz_id: string;
    resposta: string;
    correta: boolean;
}

@injectable()
class CreateOpcaoQuizUseCase {
    constructor(
        @inject("OpcaoQuizRepository")
        private opcaoQuizRepository: IOpcaoQuizRepository
    ) { }

    async execute({
        quiz_id,
        resposta,
        correta,
    }: IRequest): Promise<OpcaoQuiz> {
        const opcaoQuiz = await this.opcaoQuizRepository.create({
            quiz_id,
            resposta,
            correta,
        });

        return opcaoQuiz;
    }
}

export { CreateOpcaoQuizUseCase };

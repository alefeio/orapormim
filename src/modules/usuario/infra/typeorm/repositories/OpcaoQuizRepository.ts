import { Repository, getRepository } from "typeorm";

import {
    ICreateOpcaoQuizDTO,
    IOpcaoQuizRepository,
} from "@modules/usuario/repositories/IOpcaoQuizRepository";

import { OpcaoQuiz } from "../entities/OpcaoQuiz";

class OpcaoQuizRepository implements IOpcaoQuizRepository {
    private repository: Repository<OpcaoQuiz>;

    constructor() {
        this.repository = getRepository(OpcaoQuiz);
    }
    async create({
        quiz_id,
        resposta,
        correta,
    }: ICreateOpcaoQuizDTO): Promise<OpcaoQuiz> {
        const opcaoQuiz = this.repository.create({
            quiz_id,
            resposta,
            correta,
        });

        await this.repository.save(opcaoQuiz);

        return opcaoQuiz;
    }
}

export { OpcaoQuizRepository };

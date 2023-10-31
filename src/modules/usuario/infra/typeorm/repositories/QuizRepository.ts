import { Repository, getRepository } from "typeorm";

import {
    ICreateQuizDTO,
    IQuizRepository,
} from "@modules/usuario/repositories/IQuizRepository";

import { Quiz } from "../entities/Quiz";

class QuizRepository implements IQuizRepository {
    private repository: Repository<Quiz>;

    constructor() {
        this.repository = getRepository(Quiz);
    }

    async create({ desafio_id, pergunta }: ICreateQuizDTO): Promise<Quiz> {
        const quiz = this.repository.create({ desafio_id, pergunta });

        await this.repository.save(quiz);

        return quiz;
    }
}

export { QuizRepository };

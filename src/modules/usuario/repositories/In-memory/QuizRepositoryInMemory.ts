import { Quiz } from "@modules/usuario/infra/typeorm/entities/Quiz";

import { ICreateQuizDTO, IQuizRepository } from "../IQuizRepository";

class QuizRepositoryInMemory implements IQuizRepository {
    quiz: Quiz[] = [];

    async create({ pergunta }: ICreateQuizDTO): Promise<Quiz> {
        const quiz = new Quiz();

        Object.assign(quiz, {
            pergunta,
        });

        this.quiz.push(quiz);

        return quiz;
    }
}

export { QuizRepositoryInMemory };

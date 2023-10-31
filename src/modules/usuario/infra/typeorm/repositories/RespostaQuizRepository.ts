import { Repository, getRepository } from "typeorm";

import {
    ICreateRespostaQuizDTO,
    IRespostaQuizRepository,
} from "@modules/usuario/repositories/IRespostaQuizRepository";

import { RespostaQuiz } from "../entities/RespostaQuiz";

class RespostaQuizRepository implements IRespostaQuizRepository {
    private repository: Repository<RespostaQuiz>;

    constructor() {
        this.repository = getRepository(RespostaQuiz);
    }

    async create({
        quiz_id,
        usuario_id,
        pontuacao,
    }: ICreateRespostaQuizDTO): Promise<RespostaQuiz> {
        const respostaQuiz = this.repository.create({
            quiz_id,
            usuario_id,
            pontuacao,
        });

        await this.repository.save(respostaQuiz);

        return respostaQuiz;
    }
    async respondeuQuiz(
        quiz_id: string,
        usuario_id: string
    ): Promise<RespostaQuiz> {
        const respondeuQuizQuery = this.repository
            .createQueryBuilder("q")
            .where("quiz_id = :quiz_id", { quiz_id })
            .where("usuario_id = :usuario_id", { usuario_id });

        const respondeuQuiz = await respondeuQuizQuery.getOne();

        return respondeuQuiz;
    }
}

export { RespostaQuizRepository };

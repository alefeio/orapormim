import { ICreatePropositoDTO } from "@modules/usuario/dtos/ICreatePropositoDTO";
import { Proposito } from "@modules/usuario/infra/typeorm/entities/Proposito";
import { RespostaQuiz } from "@modules/usuario/infra/typeorm/entities/RespostaQuiz";

import { IPropositoRepository } from "../IPropositoRepository";
import {
    ICreateRespostaQuizDTO,
    IRespostaQuizRepository,
} from "../IRespostaQuizRepository";

class RespostaQuizRepositoryInMemory implements IRespostaQuizRepository {
    respostas: RespostaQuiz[];

    async create({
        quiz_id,
        usuario_id,
        pontuacao,
    }: ICreateRespostaQuizDTO): Promise<RespostaQuiz> {
        const resposta = new RespostaQuiz();

        Object.assign(resposta, {
            quiz_id,
            usuario_id,
            pontuacao,
        });

        this.respostas.push(resposta);

        return resposta;
    }
    async respondeuQuiz(
        quiz_id: string,
        usuario_id: string
    ): Promise<RespostaQuiz> {
        const resposta = this.respostas.find(async (resp) => {
            return resp.quiz_id === quiz_id && resp.usuario_id === usuario_id;
        });

        return resposta;
    }
}

export { RespostaQuizRepositoryInMemory };

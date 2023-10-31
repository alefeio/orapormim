import { RespostaQuiz } from "../infra/typeorm/entities/RespostaQuiz";

interface ICreateRespostaQuizDTO {
    quiz_id: string;
    usuario_id: string;
    pontuacao: number;
}

interface IRespostaQuizRepository {
    create(data: ICreateRespostaQuizDTO): Promise<RespostaQuiz>;
    respondeuQuiz(quiz_id: string, usuario_id: string): Promise<RespostaQuiz>;
}

export { IRespostaQuizRepository, ICreateRespostaQuizDTO };

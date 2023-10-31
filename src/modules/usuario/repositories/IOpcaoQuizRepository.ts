import { OpcaoQuiz } from "../infra/typeorm/entities/OpcaoQuiz";

interface ICreateOpcaoQuizDTO {
    quiz_id: string;
    resposta: string;
    correta: boolean;
}

interface IOpcaoQuizRepository {
    create(data: ICreateOpcaoQuizDTO): Promise<OpcaoQuiz>;
}

export { IOpcaoQuizRepository, ICreateOpcaoQuizDTO };

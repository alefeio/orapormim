import { Quiz } from "../infra/typeorm/entities/Quiz";

interface ICreateQuizDTO {
    desafio_id: string;
    pergunta: string;
}

interface IQuizRepository {
    create(data: ICreateQuizDTO): Promise<Quiz>;
}

export { IQuizRepository, ICreateQuizDTO };

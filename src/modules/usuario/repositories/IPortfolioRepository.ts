import { Portfolio } from "../infra/typeorm/entities/Portfolio";

interface ICreatePortfolioDTO {
    usuario_id?: string;
    titulo?: string;
    descricao?: string;
    id?: string;
}

interface IPortfolioRepository {
    create({
        usuario_id,
        titulo,
        descricao,
    }: ICreatePortfolioDTO): Promise<Portfolio>;
    list({ id }: ICreatePortfolioDTO): Promise<Portfolio[]>;
}

export { IPortfolioRepository, ICreatePortfolioDTO };

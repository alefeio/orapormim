import { ImagensPortfolio } from "../infra/typeorm/entities/ImagensPortfolio";

interface IImagensPortfolioRepository {
    create(
        portfolio_id: string,
        nome: string,
        titulo?: string,
        descricao?: string
    ): Promise<ImagensPortfolio>;
}

export { IImagensPortfolioRepository };

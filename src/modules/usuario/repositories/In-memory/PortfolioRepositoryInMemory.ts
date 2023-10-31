import { Portfolio } from "@modules/usuario/infra/typeorm/entities/Portfolio";

import {
    ICreatePortfolioDTO,
    IPortfolioRepository,
} from "../IPortfolioRepository";

class PortfolioRepositoryInMemory implements IPortfolioRepository {
    portfolios: Portfolio[] = [];

    async create({
        usuario_id,
        titulo,
        descricao,
    }: ICreatePortfolioDTO): Promise<Portfolio> {
        const portfolio = new Portfolio();

        Object.assign(portfolio, { usuario_id, titulo, descricao });

        this.portfolios.push(portfolio);

        return portfolio;
    }
    async list({ id }: ICreatePortfolioDTO): Promise<Portfolio[]> {
        const portfolios = this.portfolios.filter(
            (portfolio) => portfolio.id === id
        );
        return portfolios;
    }
}

export { PortfolioRepositoryInMemory };

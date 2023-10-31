import { Repository, getRepository } from "typeorm";

import {
    ICreatePortfolioDTO,
    IPortfolioRepository,
} from "@modules/usuario/repositories/IPortfolioRepository";

import { Portfolio } from "../entities/Portfolio";

class PortfolioRepository implements IPortfolioRepository {
    private repository: Repository<Portfolio>;

    constructor() {
        this.repository = getRepository(Portfolio);
    }

    async create({
        usuario_id,
        titulo,
        descricao,
    }: ICreatePortfolioDTO): Promise<Portfolio> {
        const portfolio = this.repository.create({
            usuario_id,
            titulo,
            descricao,
        });

        await this.repository.save(portfolio);

        return portfolio;
    }
    async list({ id }: ICreatePortfolioDTO): Promise<Portfolio[]> {
        const portfoliosQuery = this.repository
            .createQueryBuilder("pf")
            .where("usuario_id = :usuario_id", { usuario_id: id });

        const portfolios = await portfoliosQuery.getMany();

        return portfolios;
    }
}

export { PortfolioRepository };

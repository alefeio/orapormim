import { inject, injectable } from "tsyringe";

import { Portfolio } from "@modules/usuario/infra/typeorm/entities/Portfolio";
import { PortfolioRepository } from "@modules/usuario/infra/typeorm/repositories/PortfolioRepository";
import { ICreatePortfolioDTO } from "@modules/usuario/repositories/IPortfolioRepository";

@injectable()
class ListPortfolioUseCase {
    constructor(
        @inject("PortfolioRepository")
        private portfolioRepository: PortfolioRepository
    ) { }

    async execute({ id }: ICreatePortfolioDTO): Promise<Portfolio[]> {
        const portfolios = this.portfolioRepository.list({ id });

        return portfolios;
    }
}

export { ListPortfolioUseCase };

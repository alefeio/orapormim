import { inject, injectable } from "tsyringe";

import { Portfolio } from "@modules/usuario/infra/typeorm/entities/Portfolio";
import { IPortfolioRepository } from "@modules/usuario/repositories/IPortfolioRepository";

interface IRequest {
    usuario_id: string;
    titulo: string;
    descricao: string;
}

@injectable()
class CreatePortfolioUseCase {
    constructor(
        @inject("PortfolioRepository")
        private portfolioRepository: IPortfolioRepository
    ) { }

    async execute({
        usuario_id,
        titulo,
        descricao,
    }: IRequest): Promise<Portfolio> {
        const portfolio = this.portfolioRepository.create({
            usuario_id,
            titulo,
            descricao,
        });

        return portfolio;
    }
}

export { CreatePortfolioUseCase };

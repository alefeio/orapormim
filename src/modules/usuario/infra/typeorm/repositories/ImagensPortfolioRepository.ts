import { Repository, getRepository } from "typeorm";

import { IImagensPortfolioRepository } from "@modules/usuario/repositories/IImagensPortfolioRepository";

import { ImagensPortfolio } from "../entities/ImagensPortfolio";

class ImagensPortfolioRepository implements IImagensPortfolioRepository {
    private repository: Repository<ImagensPortfolio>;

    constructor() {
        this.repository = getRepository(ImagensPortfolio);
    }

    async create(
        portfolio_id: string,
        nome: string
    ): Promise<ImagensPortfolio> {
        const imgPortfolio = this.repository.create({
            portfolio_id,
            nome,
        });

        this.repository.save(imgPortfolio);

        return imgPortfolio;
    }
}

export { ImagensPortfolioRepository };

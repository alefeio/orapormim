import { inject, injectable } from "tsyringe";

import { ImagensPortfolioRepository } from "@modules/usuario/infra/typeorm/repositories/ImagensPortfolioRepository";

interface IRequest {
    portfolio_id: string;
    imagens: string[];
}

@injectable()
class UploadImagensPortfolioUseCase {
    constructor(
        @inject("ImagensPortfolioRepository")
        private imagensPortfolioRepository: ImagensPortfolioRepository
    ) { }

    async execute({ portfolio_id, imagens }: IRequest): Promise<void> {
        imagens.map(async (img) => {
            await this.imagensPortfolioRepository.create(portfolio_id, img);
        });
    }
}

export { UploadImagensPortfolioUseCase };

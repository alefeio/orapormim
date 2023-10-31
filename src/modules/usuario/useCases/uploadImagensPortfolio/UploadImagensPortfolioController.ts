import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadImagensPortfolioUseCase } from "./UploadImagensPortfolioUseCase";

interface IFiles {
    filename: string;
}

class UploadImagensPortfolioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: portfolio_id } = request.params;
        const imagensData = request.files as IFiles[];

        const uploadImagensPortfolioUseCase = container.resolve(
            UploadImagensPortfolioUseCase
        );

        const imagens = imagensData.map((file) => file.filename);

        uploadImagensPortfolioUseCase.execute({ portfolio_id, imagens });

        return response.status(201).send();
    }
}

export { UploadImagensPortfolioController };

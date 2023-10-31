import { Request, Response } from "express";
import { container } from "tsyringe";

import { EndDesafioUseCase } from "./EndDesafioUseCase";

class EndDesafioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const endDesafioUseCase = container.resolve(EndDesafioUseCase);

        await endDesafioUseCase.execute({ id });

        return response.status(201).send();
    }
}

export { EndDesafioController };

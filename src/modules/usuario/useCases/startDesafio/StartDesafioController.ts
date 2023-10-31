import { Request, Response } from "express";
import { container } from "tsyringe";

import { StartDesafioUseCase } from "./StartDesafioUseCase";

class StartDesafioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const startDesafioUseCase = container.resolve(StartDesafioUseCase);

        await startDesafioUseCase.execute({ id });

        return response.status(201).send();
    }
}

export { StartDesafioController };

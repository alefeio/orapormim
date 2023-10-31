import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBibliaUseCase } from "../listBiblia/ListBibliaUseCase";
import { CreateOracaoUseCase } from "./CreateOracaoUseCase";

class CreateOracaoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const biblia = new ListBibliaUseCase();
        const randomBiblia = await biblia.versosRandom({ versao: "nvi" });

        const createOracaoUseCase = container.resolve(CreateOracaoUseCase);

        await createOracaoUseCase.execute(randomBiblia);

        return response.status(201).send();
    }
}

export { CreateOracaoController };

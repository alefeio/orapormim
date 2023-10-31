import { Request, Response } from "express";

import { CreateBibliaUseCase } from "./CreateBibliaUsaCase";

class CreateBibliaController {
    // eslint-disable-next-line prettier/prettier
    constructor(private createBibliaUseCase: CreateBibliaUseCase) { }

    handle(request: Request, response: Response): Response {
        const { testamento, livro, capitulo, versiculo, texto } = request.body;

        this.createBibliaUseCase.execute({
            testamento,
            livro,
            capitulo,
            versiculo,
            texto,
        });

        return response.status(201).send();
    }
}

export { CreateBibliaController };

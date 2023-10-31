import { Request, Response } from "express";

import { ListBibliaUseCase } from "./ListBibliaUseCase";

class ListBibliaController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listBibliaUseCase: ListBibliaUseCase) { }

    async livros(request: Request, response: Response) {
        const livros = await this.listBibliaUseCase.livros();

        return response.json(livros);
    }

    async versos(request: Request, response: Response) {
        const data = {
            versao: request.params.versao,
            livro: request.params.livro,
            capitulo: request.params.capitulo,
        };
        const versos = await this.listBibliaUseCase.versos(data);

        return response.json(versos);
    }

    async versosRandom(request: Request, response: Response) {
        const data = {
            versao: request.params.versao,
        };
        const versos = await this.listBibliaUseCase.versosRandom(data);

        return response.json(versos);
    }
}

export { ListBibliaController };

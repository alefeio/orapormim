import { Request, Response } from "express";

import { ImportBibliaUseCase } from "./ImportBibliaUseCase";

class ImportBibliaController {
    constructor(private importBibliaUseCase: ImportBibliaUseCase) {
        // null
    }

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importBibliaUseCase.execute(file);

        return response.send();
    }
}

export { ImportBibliaController };

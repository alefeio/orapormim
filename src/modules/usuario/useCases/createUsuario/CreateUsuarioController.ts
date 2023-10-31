import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            nome,
            password,
            email,
            celular,
            pix,
            profissao,
            linkedin,
            github,
            instagram,
            facebook,
            site,
            categoria_id,
            perfil_id,
        } = request.body;

        const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase);

        await createUsuarioUseCase.execute({
            nome,
            password,
            email,
            celular,
            pix,
            profissao,
            linkedin,
            github,
            instagram,
            facebook,
            site,
            categoria_id,
            perfil_id,
        });

        return response.status(201).send();
    }
}

export { CreateUsuarioController };

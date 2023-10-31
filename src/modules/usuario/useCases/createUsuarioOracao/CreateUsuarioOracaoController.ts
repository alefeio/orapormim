import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsuarioOracaoUseCase } from "./CreateUsuarioOracaoUseCase";

class CreateUsuarioOracaoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { usuarios_id } = request.body;

        const createUsuarioOracaoUseCase = container.resolve(
            CreateUsuarioOracaoUseCase
        );

        const usuarioOracao = await createUsuarioOracaoUseCase.execute({
            oracao_id: id,
            usuarios_id,
        });

        return response.json(usuarioOracao);
    }
}

export { CreateUsuarioOracaoController };

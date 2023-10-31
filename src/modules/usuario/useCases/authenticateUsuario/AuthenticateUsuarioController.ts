import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUsuarioUseCase } from "./AuthenticateUsuarioUseCase";

class AuthenticateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUsuarioUseCase = container.resolve(
            AuthenticateUsuarioUseCase
        );

        const token = await authenticateUsuarioUseCase.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export { AuthenticateUsuarioController };

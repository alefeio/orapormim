import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    usuario: {
        nome: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {
        // null
    }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const usuario = await this.usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new AppError("Usuário ou senha incorreto!");
        }

        const passwordMatch = await compare(password, usuario.password);

        if (!passwordMatch) {
            throw new AppError("Usuário ou senha incorreto!");
        }

        const token = sign({}, "e863ddb066f885b35ed2b8695250ec75", {
            subject: usuario.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            usuario: {
                nome: usuario.nome,
                email: usuario.email,
            },
            token,
        };

        return tokenReturn;
    }
}

export { AuthenticateUsuarioUseCase };

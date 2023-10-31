import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsuarioRepository } from "@modules/usuario/infra/typeorm/repositories/UsuarioRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token ausente!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "e863ddb066f885b35ed2b8695250ec75"
        ) as IPayload;

        const usuarioRepository = new UsuarioRepository();
        const usuario = await usuarioRepository.findById(user_id);

        if (!usuario) {
            throw new AppError("Usuário não existe!", 401);
        }

        request.usuario = {
            id: user_id,
        };

        next();
    } catch (error) {
        throw new AppError("Token inválido!", 401);
    }
}

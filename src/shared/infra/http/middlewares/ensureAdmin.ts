import { NextFunction, Request, Response } from "express";

import { UsuarioRepository } from "@modules/usuario/infra/typeorm/repositories/UsuarioRepository";
import { AppError } from "@shared/errors/AppError";

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.usuario;

    const usuarioRepository = new UsuarioRepository();

    const usuario = await usuarioRepository.findById(id);

    if (!usuario.isAdmin) {
        throw new AppError("Usuário não é admin!");
    }

    return next();
}

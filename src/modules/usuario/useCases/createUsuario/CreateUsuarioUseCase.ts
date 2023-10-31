import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUsuarioDTO } from "@modules/usuario/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {
        // null
    }

    async execute({
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
    }: ICreateUsuarioDTO): Promise<void> {
        const usuarioJaExiste = await this.usuarioRepository.findByEmail(email);

        if (usuarioJaExiste) {
            throw new AppError("Usuário já existe!");
        }

        const passwordHash = await hash(password, 8);

        await this.usuarioRepository.create({
            nome,
            password: passwordHash,
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
    }
}

export { CreateUsuarioUseCase };

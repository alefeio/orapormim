import { inject, injectable } from "tsyringe";

import { IPerfilRepository } from "@modules/usuario/repositories/IPerfilRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    nome: string;
}

@injectable()
class CreatePerfilUseCase {
    constructor(
        @inject("PerfilRepository")
        private perfilRepository: IPerfilRepository
    ) {
        // null
    }

    async execute({ nome }: IRequest): Promise<void> {
        const perfilExiste = await this.perfilRepository.findByName(nome);

        if (perfilExiste) {
            throw new AppError("Este registro já existe!");
        }

        await this.perfilRepository.create({
            nome,
        });
    }
}

export { CreatePerfilUseCase };

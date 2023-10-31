import { inject, injectable } from "tsyringe";

import { IDesafioRepository } from "@modules/usuario/repositories/IDesafioRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    nome: string;
    descricao?: string;
    foto?: string;
}

@injectable()
class CreateDesafioUseCase {
    constructor(
        @inject("DesafioRepository")
        private desafioRepository: IDesafioRepository
    ) { }

    async execute({ nome, descricao, foto }: IRequest) {
        const desafioExiste = await this.desafioRepository.findByName(nome);

        if (desafioExiste) {
            throw new AppError("Este registro já existe!");
        }

        const desafio = this.desafioRepository.create({
            nome,
            descricao,
            foto,
        });

        return desafio;
    }
}

export { CreateDesafioUseCase };

import { inject, injectable } from "tsyringe";

import { IDesafioRepository } from "@modules/usuario/repositories/IDesafioRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class EndDesafioUseCase {
    constructor(
        @inject("DesafioRepository")
        private desafioRepository: IDesafioRepository
    ) { }

    async execute({ id }: IRequest): Promise<void> {
        const desafioEmCurso = await this.desafioRepository.findDesafioIniciado(
            id
        );

        if (desafioEmCurso) {
            throw new AppError("Este desafio não foi iniciado!");
        }

        this.desafioRepository.endDesafio(id);
    }
}

export { EndDesafioUseCase };

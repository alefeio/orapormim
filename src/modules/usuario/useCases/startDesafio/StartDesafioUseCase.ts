import { inject, injectable } from "tsyringe";

import { IDesafioRepository } from "@modules/usuario/repositories/IDesafioRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class StartDesafioUseCase {
    constructor(
        @inject("DesafioRepository")
        private desafioRepository: IDesafioRepository
    ) { }

    async execute({ id }: IRequest): Promise<void> {
        const desafioEmCurso =
            await this.desafioRepository.findDesafioEmCurso();

        if (desafioEmCurso) {
            throw new AppError("Há um desafio ativo no momento!");
        }

        await this.desafioRepository.startDesafio(id);
    }
}

export { StartDesafioUseCase };

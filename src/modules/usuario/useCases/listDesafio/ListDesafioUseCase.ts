import { inject, injectable } from "tsyringe";

import { Desafio } from "@modules/usuario/infra/typeorm/entities/Desafio";
import { IDesafioRepository } from "@modules/usuario/repositories/IDesafioRepository";

@injectable()
class ListDesafioUseCase {
    constructor(
        @inject("DesafioRepository")
        private desafioRepository: IDesafioRepository
    ) { }

    async execute(): Promise<Desafio[]> {
        const desafios = this.desafioRepository.list();

        return desafios;
    }
}

export { ListDesafioUseCase };

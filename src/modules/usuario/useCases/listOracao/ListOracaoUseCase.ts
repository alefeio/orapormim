import { inject, injectable } from "tsyringe";

import { Oracao } from "@modules/usuario/infra/typeorm/entities/Oracao";
import { IOracaoRepository } from "@modules/usuario/repositories/IOracaoRepository";

@injectable()
class ListOracaoUseCase {
    constructor(
        @inject("OracaoRepository")
        private oracaoRepository: IOracaoRepository
    ) { }

    async execute(): Promise<Oracao[]> {
        const oracoes = await this.oracaoRepository.list();
        return oracoes;
    }
}

export { ListOracaoUseCase };

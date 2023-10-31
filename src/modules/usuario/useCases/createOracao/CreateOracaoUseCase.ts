import { inject, injectable } from "tsyringe";

import { Oracao } from "@modules/usuario/infra/typeorm/entities/Oracao";
import { IOracaoRepository } from "@modules/usuario/repositories/IOracaoRepository";

interface IRequest {
    livro: string;
    capitulo: number;
    versiculo: string;
    texto: string;
}

@injectable()
class CreateOracaoUseCase {
    constructor(
        @inject("OracaoRepository")
        private oracaoRepository: IOracaoRepository
    ) { }

    async execute({
        livro,
        capitulo,
        versiculo,
        texto,
    }: IRequest): Promise<Oracao> {
        const oracao = this.oracaoRepository.create({
            livro,
            capitulo,
            versiculo,
            texto,
        });

        return oracao;
    }
}

export { CreateOracaoUseCase };

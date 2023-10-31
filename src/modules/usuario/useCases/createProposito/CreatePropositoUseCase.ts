import { inject, injectable } from "tsyringe";

import { Proposito } from "@modules/usuario/infra/typeorm/entities/Proposito";
import { IPropositoRepository } from "@modules/usuario/repositories/IPropositoRepository";

interface IRequest {
    usuario_id: string;
    descricao: string;
}

@injectable()
class CreatePropositoUseCase {
    constructor(
        @inject("PropositoRepository")
        private propositoRepository: IPropositoRepository
    ) { }

    async execute({ usuario_id, descricao }: IRequest): Promise<Proposito> {
        const proposito = await this.propositoRepository.create({
            usuario_id,
            descricao,
        });

        return proposito;
    }
}

export { CreatePropositoUseCase };

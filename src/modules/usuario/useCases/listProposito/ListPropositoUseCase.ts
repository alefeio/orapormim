import { inject, injectable } from "tsyringe";

import { Proposito } from "@modules/usuario/infra/typeorm/entities/Proposito";
import { IPropositoRepository } from "@modules/usuario/repositories/IPropositoRepository";

interface IRequest {
    id: string;
}

@injectable()
class ListPropositoUseCase {
    constructor(
        @inject("PropositoRepository")
        private propositoRepository: IPropositoRepository
    ) { }

    async execute({ id }: IRequest): Promise<Proposito[]> {
        const propositos = await this.propositoRepository.findAll(id);

        return propositos;
    }
}

export { ListPropositoUseCase };

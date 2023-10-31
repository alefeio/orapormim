import { ICreatePropositoDTO } from "@modules/usuario/dtos/ICreatePropositoDTO";
import { Proposito } from "@modules/usuario/infra/typeorm/entities/Proposito";

import { IPropositoRepository } from "../IPropositoRepository";

class PropositoRepositoryInMemory implements IPropositoRepository {
    propositos: Proposito[] = [];

    async create({
        usuario_id,
        descricao,
    }: ICreatePropositoDTO): Promise<Proposito> {
        const proposito = new Proposito();

        Object.assign(proposito, {
            usuario_id,
            descricao,
        });

        this.propositos.push(proposito);

        return proposito;
    }

    async findAll(id: string): Promise<Proposito[]> {
        const propositos = this.propositos.filter(
            (proposito) => proposito.id === id
        );

        return propositos;
    }
}

export { PropositoRepositoryInMemory };

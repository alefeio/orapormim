import { Repository, getRepository } from "typeorm";

import { ICreatePropositoDTO } from "@modules/usuario/dtos/ICreatePropositoDTO";
import { IPropositoRepository } from "@modules/usuario/repositories/IPropositoRepository";

import { Proposito } from "../entities/Proposito";

class PropositoRepository implements IPropositoRepository {
    private repository: Repository<Proposito>;

    constructor() {
        this.repository = getRepository(Proposito);
    }

    async create({
        usuario_id,
        descricao,
    }: ICreatePropositoDTO): Promise<Proposito> {
        const proposito = this.repository.create({ usuario_id, descricao });

        await this.repository.save(proposito);

        return proposito;
    }

    async findAll(id: string): Promise<Proposito[]> {
        const propositosQuery = this.repository
            .createQueryBuilder("pr")
            .where("usuario_id = :usuario_id", { usuario_id: id });

        const propositos = await propositosQuery.getMany();

        return propositos;
    }
}

export { PropositoRepository };

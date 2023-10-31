import { Repository, getRepository } from "typeorm";

import { ICreatePedidoOracaoDTO } from "@modules/usuario/dtos/ICreatePedidoOracaDTO";
import { IPedidoOracaoRepository } from "@modules/usuario/repositories/IPedidoOracaoRepository";

import { PedidoOracao } from "../entities/PedidoOracao";

class PedidoOracaoRepository implements IPedidoOracaoRepository {
    private repository: Repository<PedidoOracao>;

    constructor() {
        this.repository = getRepository(PedidoOracao);
    }

    async create({
        usuario_id,
        pedido,
    }: ICreatePedidoOracaoDTO): Promise<PedidoOracao> {
        const pedidoOracao = this.repository.create({ usuario_id, pedido });

        await this.repository.save(pedidoOracao);

        return pedidoOracao;
    }

    async findAll(id: string): Promise<PedidoOracao[]> {
        const pedidoOracaoQuery = this.repository
            .createQueryBuilder("po")
            .where("usuario_id = :usuario_id", { usuario_id: id });

        const pedidosOracao = await pedidoOracaoQuery.getMany();

        return pedidosOracao;
    }
}

export { PedidoOracaoRepository };

import { ICreatePedidoOracaoDTO } from "@modules/usuario/dtos/ICreatePedidoOracaDTO";
import { PedidoOracao } from "@modules/usuario/infra/typeorm/entities/PedidoOracao";

import { IPedidoOracaoRepository } from "../IPedidoOracaoRepository";

class PedidoOracaoRepositoryInMemory implements IPedidoOracaoRepository {
    pedidosOracao: PedidoOracao[] = [];

    async create({
        usuario_id,
        pedido,
    }: ICreatePedidoOracaoDTO): Promise<PedidoOracao> {
        const pedidoOracao = new PedidoOracao();

        Object.assign(pedidoOracao, {
            usuario_id,
            pedido,
        });

        this.pedidosOracao.push(pedidoOracao);

        return pedidoOracao;
    }

    async findAll(id: string): Promise<PedidoOracao[]> {
        const pedidoOracao = this.pedidosOracao.filter(
            (pedido) => pedido.usuario_id === id
        );
        return pedidoOracao;
    }
}

export { PedidoOracaoRepositoryInMemory };

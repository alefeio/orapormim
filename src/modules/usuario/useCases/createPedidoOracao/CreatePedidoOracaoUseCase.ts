import { inject, injectable } from "tsyringe";

import { PedidoOracao } from "@modules/usuario/infra/typeorm/entities/PedidoOracao";
import { IPedidoOracaoRepository } from "@modules/usuario/repositories/IPedidoOracaoRepository";

interface IRequest {
    usuario_id: string;
    pedido: string;
}

@injectable()
class CreatePedidoOracaoUseCase {
    constructor(
        @inject("PedidoOracaoRepository")
        private pedidoOracaoRepository: IPedidoOracaoRepository
    ) { }

    async execute({ usuario_id, pedido }: IRequest): Promise<PedidoOracao> {
        const pedidoOracao = await this.pedidoOracaoRepository.create({
            usuario_id,
            pedido,
        });

        return pedidoOracao;
    }
}

export { CreatePedidoOracaoUseCase };

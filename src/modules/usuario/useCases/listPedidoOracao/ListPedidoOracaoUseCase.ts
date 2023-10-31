import { inject, injectable } from "tsyringe";

import { PedidoOracao } from "@modules/usuario/infra/typeorm/entities/PedidoOracao";
import { IPedidoOracaoRepository } from "@modules/usuario/repositories/IPedidoOracaoRepository";

interface IRequest {
    id: string;
}

@injectable()
class ListPedidoOracaoUseCase {
    constructor(
        @inject("PedidoOracaoRepository")
        private pedidoOracaoRepository: IPedidoOracaoRepository
    ) { }

    async execute({ id }: IRequest): Promise<PedidoOracao[]> {
        const pedidoOracao = await this.pedidoOracaoRepository.findAll(id);

        return pedidoOracao;
    }
}

export { ListPedidoOracaoUseCase };

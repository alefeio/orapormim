import { ICreatePedidoOracaoDTO } from "@modules/usuario/dtos/ICreatePedidoOracaDTO";

import { PedidoOracao } from "../infra/typeorm/entities/PedidoOracao";

interface IPedidoOracaoRepository {
    create(data: ICreatePedidoOracaoDTO): Promise<PedidoOracao>;
    findAll(id: string): Promise<PedidoOracao[]>;
}

export { IPedidoOracaoRepository };

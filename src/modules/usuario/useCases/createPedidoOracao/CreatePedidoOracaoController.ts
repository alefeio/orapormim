import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePedidoOracaoUseCase } from "./CreatePedidoOracaoUseCase";

class CreatePedidoOracaoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: usuario_id } = request.usuario;
        const { pedido } = request.body;

        const createPedidoOracaoUseCase = container.resolve(
            CreatePedidoOracaoUseCase
        );

        const pedidoOracao = await createPedidoOracaoUseCase.execute({
            usuario_id,
            pedido,
        });

        return response.status(201).json(pedidoOracao);
    }
}

export { CreatePedidoOracaoController };

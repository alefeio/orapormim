import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPedidoOracaoUseCase } from "./ListPedidoOracaoUseCase";

class ListPedidoOracaoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        const { id: idAuth } = request.usuario;

        const listPedidoOracaoUseCase = container.resolve(
            ListPedidoOracaoUseCase
        );

        const pedidosOracao = await listPedidoOracaoUseCase.execute({
            id: (id as string) || idAuth,
        });

        return response.json(pedidosOracao);
    }
}

export { ListPedidoOracaoController };

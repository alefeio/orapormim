import { PedidoOracaoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/PedidoOracaoInMemory";

import { ListPedidoOracaoUseCase } from "./ListPedidoOracaoUseCase";

let listPedidoOracaoUseCase: ListPedidoOracaoUseCase;
let pedidoOracaoRepositoryInMemory: PedidoOracaoRepositoryInMemory;

describe("Listar pedido de oração", () => {
    beforeEach(() => {
        pedidoOracaoRepositoryInMemory = new PedidoOracaoRepositoryInMemory();
        listPedidoOracaoUseCase = new ListPedidoOracaoUseCase(
            pedidoOracaoRepositoryInMemory
        );
    });

    it("O usuário deve poder listar os seus pedidos de oração", async () => {
        const pedidoOracao = await pedidoOracaoRepositoryInMemory.create({
            usuario_id: "484999db-ec12-4ff8-b806-3c6d7d0ca14d",
            pedido: "Gostaria de pedir pela minha família e vida financeira",
        });

        const pedidosOracao = await listPedidoOracaoUseCase.execute({
            id: "484999db-ec12-4ff8-b806-3c6d7d0ca14d",
        });

        expect(pedidosOracao).toEqual([pedidoOracao]);
    });
});

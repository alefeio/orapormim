import { PedidoOracaoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/PedidoOracaoInMemory";

import { CreatePedidoOracaoUseCase } from "./CreatePedidoOracaoUseCase";

let createPedidoOracaoUseCase: CreatePedidoOracaoUseCase;
let pedidoOracaoRepositoryInMemory: PedidoOracaoRepositoryInMemory;

describe("Criar pedido de oração", () => {
    beforeEach(() => {
        pedidoOracaoRepositoryInMemory = new PedidoOracaoRepositoryInMemory();
        createPedidoOracaoUseCase = new CreatePedidoOracaoUseCase(
            pedidoOracaoRepositoryInMemory
        );
    });

    it("Deve poder criar um pedido de oração", async () => {
        const pedidoOracao = await createPedidoOracaoUseCase.execute({
            usuario_id: "asdasd",
            pedido: "Gostaria de oração para minha vida familiar e financeira",
        });

        expect(pedidoOracao).toHaveProperty("id");
    });
});

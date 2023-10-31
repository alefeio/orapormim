import { PropositoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/PropositoInMemory";

import { CreatePropositoUseCase } from "./CreatePropositoUseCase";

let createPropositoUseCase: CreatePropositoUseCase;
let propositoRepositoryInMemory: PropositoRepositoryInMemory;

describe("Criar um propósito", () => {
    beforeEach(() => {
        propositoRepositoryInMemory = new PropositoRepositoryInMemory();
        createPropositoUseCase = new CreatePropositoUseCase(
            propositoRepositoryInMemory
        );
    });

    it("Deve poder criar um propósito", async () => {
        const proposito = await createPropositoUseCase.execute({
            usuario_id: "3c973ed4-cd9a-4f8b-8871-46d0b300899a",
            descricao: "Restaurar a minha família",
        });

        expect(proposito).toHaveProperty("id");
    });
});

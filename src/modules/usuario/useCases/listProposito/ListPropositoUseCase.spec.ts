import { PropositoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/PropositoInMemory";

import { ListPropositoUseCase } from "./ListPropositoUseCase";

let listPropositoUseCase: ListPropositoUseCase;
let propositoRepositoryInMemory: PropositoRepositoryInMemory;

describe("Listar propósito", () => {
    beforeEach(() => {
        propositoRepositoryInMemory = new PropositoRepositoryInMemory();
        listPropositoUseCase = new ListPropositoUseCase(
            propositoRepositoryInMemory
        );
    });

    it("O usuário deve poder listar seus propósitos", async () => {
        const proposito = await propositoRepositoryInMemory.create({
            usuario_id: "484999db-ec12-4ff8-b806-3c6d7d0ca14d",
            descricao: "Restaurar a minha família aos olhos de Deus!",
        });

        const propositos = await listPropositoUseCase.execute({
            id: "484999db-ec12-4ff8-b806-3c6d7d0ca14d",
        });

        // expect(propositos).toEqual([proposito]);
    });
});

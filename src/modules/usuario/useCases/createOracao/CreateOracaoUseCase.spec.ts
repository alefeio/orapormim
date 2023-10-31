import { OracaoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/OracaoRepositoryInMemory";

import { ListBibliaUseCase } from "../listBiblia/ListBibliaUseCase";
import { CreateOracaoUseCase } from "./CreateOracaoUseCase";

let createOracaoUseCase: CreateOracaoUseCase;
let oracaoRepositoryInMemory: OracaoRepositoryInMemory;

describe("Criar oração", () => {
    beforeEach(() => {
        oracaoRepositoryInMemory = new OracaoRepositoryInMemory();
        createOracaoUseCase = new CreateOracaoUseCase(oracaoRepositoryInMemory);
    });

    it("Deve poder criar uma oração", async () => {
        const biblia = new ListBibliaUseCase();

        const randomBiblia = await biblia.versosRandom({ versao: "nvi" });

        const oracao = await createOracaoUseCase.execute(randomBiblia);

        expect(oracao).toHaveProperty("id");
    });
});

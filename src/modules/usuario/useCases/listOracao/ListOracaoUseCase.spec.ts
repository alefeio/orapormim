import { OracaoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/OracaoRepositoryInMemory";

import { CreateOracaoUseCase } from "../createOracao/CreateOracaoUseCase";
import { ListBibliaUseCase } from "../listBiblia/ListBibliaUseCase";
import { ListOracaoUseCase } from "./ListOracaoUseCase";

let listOracaoUseCase: ListOracaoUseCase;
let createOracaoUseCase: CreateOracaoUseCase;
let oracaoRepositoryInMemory: OracaoRepositoryInMemory;
let biblia: ListBibliaUseCase;

describe("Listar orações", () => {
    beforeEach(() => {
        listOracaoUseCase = new ListOracaoUseCase(oracaoRepositoryInMemory);
        createOracaoUseCase = new CreateOracaoUseCase(oracaoRepositoryInMemory);
        biblia = new ListBibliaUseCase();
    });

    it("Deve poder listar as orações", async () => {
        const randomBiblia = await biblia.versosRandom({ versao: "nvi" });

        await createOracaoUseCase.execute(randomBiblia);

        const oracoes = await listOracaoUseCase.execute();

        console.log("oracoes", oracoes);
    });
});

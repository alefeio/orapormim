import { PortfolioRepositoryInMemory } from "@modules/usuario/repositories/In-memory/PortfolioRepositoryInMemory";

import { CreatePortfolioUseCase } from "./CreatePortfolioUseCase";

let createPortfolioUseCase: CreatePortfolioUseCase;
let portfolioRepositoryInMemory: PortfolioRepositoryInMemory;

describe("Criar portfólio", () => {
    beforeEach(() => {
        portfolioRepositoryInMemory = new PortfolioRepositoryInMemory();
        createPortfolioUseCase = new CreatePortfolioUseCase(
            portfolioRepositoryInMemory
        );
    });

    it("Deve poder criar um portfólio", async () => {
        const portfolio = await createPortfolioUseCase.execute({
            usuario_id: "asdasdasdasdasd",
            titulo: "Meu portfólio",
            descricao: "Criando um novo portfólio para teste unitário",
        });

        console.log("portfolio", portfolio);
    });
});

import { RespostaQuizRepositoryInMemory } from "@modules/usuario/repositories/In-memory/RespostaQuizInMemory";

import { CreateRespostaQuizUseCase } from "./CreateRespostaQuizUseCase";

let createRespostaQuizUseCase: CreateRespostaQuizUseCase;
let respostaQuizRepositoryInMemory: RespostaQuizRepositoryInMemory;

describe("Criar resposta para o Quiz", () => {
    beforeEach(() => {
        respostaQuizRepositoryInMemory = new RespostaQuizRepositoryInMemory();
        createRespostaQuizUseCase = new CreateRespostaQuizUseCase(
            respostaQuizRepositoryInMemory
        );
    });

    it("O usuário deve poder responder ao quiz", async () => {
        const resposta = await createRespostaQuizUseCase.execute({
            quiz_id: "123123123",
            usuario_id: "32112312312",
            pontuacao: 6,
        });

        console.log("resposta", resposta);
    });
});

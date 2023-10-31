import { CategoriaRepositoryInMemory } from "@modules/usuario/repositories/In-memory/CategoriaRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

let createCategoriaUseCase: CreateCategoriaUseCase;
let categoriaRepositoryInMemory: CategoriaRepositoryInMemory;

describe("Criar categoria", () => {
    beforeEach(() => {
        categoriaRepositoryInMemory = new CategoriaRepositoryInMemory();
        createCategoriaUseCase = new CreateCategoriaUseCase(
            categoriaRepositoryInMemory
        );
    });

    it("Teste para criar uma nova categoria", async () => {
        const categoria = {
            nome: "Categoria teste",
        };

        await createCategoriaUseCase.execute(categoria);

        const categoriaCriada = await categoriaRepositoryInMemory.findByName(
            categoria.nome
        );

        expect(categoriaCriada).toHaveProperty("id");
    });

    it("Teste para não criar uma nova categoria, caso o nome já exista", async () => {
        expect(async () => {
            const categoria = {
                nome: "Categoria teste",
            };

            await createCategoriaUseCase.execute(categoria);

            await createCategoriaUseCase.execute(categoria);
        }).rejects.toBeInstanceOf(AppError);
    });
});

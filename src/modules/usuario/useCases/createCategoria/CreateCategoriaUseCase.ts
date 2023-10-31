import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICategoriaRepository } from "@modules/usuario/repositories/ICategoriaRepository";

interface IRequest {
    nome: string;
}

@injectable()
class CreateCategoriaUseCase {
    constructor(
        @inject("CategoriaRepository")
        private categoriaRepository: ICategoriaRepository
    ) {
        // null
    }

    async execute({ nome }: IRequest): Promise<void> {
        const categoriaExiste = await this.categoriaRepository.findByName(nome);

        if (categoriaExiste) {
            throw new AppError("Este registro já existe!");
        }

        this.categoriaRepository.create({
            nome,
        });
    }
}

export { CreateCategoriaUseCase };

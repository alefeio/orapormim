import { inject, injectable } from "tsyringe";

import { Categoria } from "@modules/usuario/infra/typeorm/entities/Categoria";
import { ICategoriaRepository } from "@modules/usuario/repositories/ICategoriaRepository";

@injectable()
class ListCategoriaUseCase {
    constructor(
        @inject("CategoriaRepository")
        private categoriaRepository: ICategoriaRepository
    ) {
        // null
    }

    async execute(): Promise<Categoria[]> {
        const categorias = await this.categoriaRepository.list();

        return categorias;
    }
}

export { ListCategoriaUseCase };

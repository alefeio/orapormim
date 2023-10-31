import { Repository, getRepository } from "typeorm";

import {
    ICategoriaRepository,
    ICreateCategoriaDTO,
} from "@modules/usuario/repositories/ICategoriaRepository";

import { Categoria } from "../entities/Categoria";

class CategoriaRepository implements ICategoriaRepository {
    private repository: Repository<Categoria>;

    constructor() {
        this.repository = getRepository(Categoria);
    }

    async create({ nome }: ICreateCategoriaDTO): Promise<void> {
        const categoria = this.repository.create({ nome });
        await this.repository.save(categoria);
    }

    async list(): Promise<Categoria[]> {
        const categorias = await this.repository.find();
        return categorias;
    }

    async findByName(nome: string): Promise<Categoria> {
        const categoria = await this.repository.findOne({ nome });

        return categoria;
    }
}

export { CategoriaRepository };

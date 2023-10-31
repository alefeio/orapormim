import { Categoria } from "@modules/usuario/infra/typeorm/entities/Categoria";
import {
    ICategoriaRepository,
    ICreateCategoriaDTO,
} from "../ICategoriaRepository";

class CategoriaRepositoryInMemory implements ICategoriaRepository {
    categorias: Categoria[] = [];

    async findByName(nome: string): Promise<Categoria> {
        const categoria = this.categorias.find(
            (categoria) => categoria.nome === nome
        );
        return categoria;
    }
    async list(): Promise<Categoria[]> {
        const all = this.categorias;
        return all;
    }
    async create({ nome }: ICreateCategoriaDTO): Promise<void> {
        const categoria = new Categoria();

        Object.assign(categoria, { nome });

        this.categorias.push(categoria);
    }
}

export { CategoriaRepositoryInMemory };

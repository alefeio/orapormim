import { Categoria } from "../infra/typeorm/entities/Categoria";

interface ICreateCategoriaDTO {
    nome: string;
}

interface ICategoriaRepository {
    findByName(nome: string): Promise<Categoria>;
    list(): Promise<Categoria[]>;
    create({ nome }: ICreateCategoriaDTO): Promise<void>;
}

export { ICategoriaRepository, ICreateCategoriaDTO };

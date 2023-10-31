import { Perfil } from "../infra/typeorm/entities/Perfil";

interface ICreatePerfilDTO {
    nome: string;
}

interface IPerfilRepository {
    findByName(nome: string): Promise<Perfil>;
    list(): Promise<Perfil[]>;
    create({ nome }: ICreatePerfilDTO): Promise<void>;
}

export { IPerfilRepository, ICreatePerfilDTO };

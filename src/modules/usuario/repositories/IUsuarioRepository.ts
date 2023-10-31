import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { Usuario } from "../infra/typeorm/entities/Usuario";

interface IUsuariosOracao {
    id: string;
}

interface IUsuarioRepository {
    create(data: ICreateUsuarioDTO): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    findById(id: string): Promise<Usuario>;
    findByIds(ids: string[]): Promise<Usuario[]>;
    findByOracao(id: string): Promise<IUsuariosOracao[]>;
}

export { IUsuarioRepository, IUsuariosOracao };

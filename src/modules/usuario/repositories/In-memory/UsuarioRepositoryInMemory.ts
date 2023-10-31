import { ICreateUsuarioDTO } from "@modules/usuario/dtos/ICreateUsuarioDTO";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";

import { IUsuarioRepository, IUsuariosOracao } from "../IUsuarioRepository";

class UsuarioRepositoryInMemory implements IUsuarioRepository {
    usuarios: Usuario[] = [];

    async create({
        nome,
        password,
        email,
        celular,
        pix,
    }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = new Usuario();

        Object.assign(usuario, {
            nome,
            password,
            email,
            celular,
            pix,
        });

        this.usuarios.push(usuario);

        return usuario;
    }
    async findByEmail(email: string): Promise<Usuario> {
        return this.usuarios.find((usuario) => usuario.email === email);
    }
    async findById(id: string): Promise<Usuario> {
        return this.usuarios.find((usuario) => usuario.id === id);
    }
    async findByIds(ids: string[]): Promise<Usuario[]> {
        const allUsuarios = this.usuarios.filter((usuario) =>
            ids.includes(usuario.id)
        );

        return allUsuarios;
    }
    findByOracao(id: string): Promise<IUsuariosOracao[]> {
        throw new Error("Method not implemented.");
    }
}

export { UsuarioRepositoryInMemory };

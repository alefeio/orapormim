import { Repository, getRepository } from "typeorm";

import { ICreateUsuarioDTO } from "@modules/usuario/dtos/ICreateUsuarioDTO";
import {
    IUsuarioRepository,
    IUsuariosOracao,
} from "@modules/usuario/repositories/IUsuarioRepository";

import { Usuario } from "../entities/Usuario";

class UsuarioRepository implements IUsuarioRepository {
    private repository: Repository<Usuario>;

    constructor() {
        this.repository = getRepository(Usuario);
    }
    async findById(id: string): Promise<Usuario> {
        const usuario = await this.repository.findOne(id);
        return usuario;
    }

    async create({
        nome,
        password,
        email,
        celular,
        pix,
        avatar,
        profissao,
        linkedin,
        github,
        instagram,
        facebook,
        site,
        categoria_id,
        perfil_id,
        id,
    }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = this.repository.create({
            nome,
            password,
            email,
            celular,
            pix,
            avatar,
            profissao,
            linkedin,
            github,
            instagram,
            facebook,
            site,
            categoria_id,
            perfil_id,
            id,
        });

        await this.repository.save(usuario);

        return usuario;
    }
    async findByEmail(email: string): Promise<Usuario> {
        const usuario = await this.repository.findOne({ email });
        return usuario;
    }
    async findByIds(ids: string[]): Promise<Usuario[]> {
        const usuarios = await this.repository.findByIds(ids);
        return usuarios;
    }
    async findByOracao(id: string): Promise<IUsuariosOracao[]> {
        const usuarios = await this.repository.query(
            `SELECT u.id FROM usuario u JOIN usuario_oracao uo ON u.id = uo.usuario_id WHERE uo.oracao_id IN ('${id}')`
        );

        return usuarios;
    }
}

export { UsuarioRepository };

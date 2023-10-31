import { Repository, getRepository } from "typeorm";

import {
    ICreatePerfilDTO,
    IPerfilRepository,
} from "@modules/usuario/repositories/IPerfilRepository";

import { Perfil } from "../entities/Perfil";

class PerfilRepository implements IPerfilRepository {
    private repository: Repository<Perfil>;

    constructor() {
        this.repository = getRepository(Perfil);
    }

    async create({ nome }: ICreatePerfilDTO): Promise<void> {
        const perfil = this.repository.create({ nome });

        await this.repository.save(perfil);
    }

    async list(): Promise<Perfil[]> {
        const perfis = await this.repository.find();
        return perfis;
    }

    async findByName(nome: string): Promise<Perfil> {
        const perfil = await this.repository.findOne({ nome });

        return perfil;
    }
}

export { PerfilRepository };

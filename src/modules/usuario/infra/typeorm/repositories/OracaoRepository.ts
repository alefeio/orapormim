import { Repository, getRepository } from "typeorm";

import { ICreateOracaoDTO } from "@modules/usuario/dtos/ICreateOracaoDTO";
import { IOracaoRepository } from "@modules/usuario/repositories/IOracaoRepository";

import { Oracao } from "../entities/Oracao";

class OracaoRepository implements IOracaoRepository {
    private repository: Repository<Oracao>;

    constructor() {
        this.repository = getRepository(Oracao);
    }
    async create({
        livro,
        capitulo,
        versiculo,
        texto,
        usuarios,
        id,
    }: ICreateOracaoDTO): Promise<Oracao> {
        const oracao = this.repository.create({
            livro,
            capitulo,
            versiculo,
            texto,
            usuarios,
            id,
        });

        await this.repository.save(oracao);

        return oracao;
    }
    async findById(id: string): Promise<Oracao> {
        const oracao = await this.repository.findOne(id);
        return oracao;
    }
    list(): Promise<Oracao[]> {
        const oracoes = this.repository.find();

        return oracoes;
    }
}

export { OracaoRepository };

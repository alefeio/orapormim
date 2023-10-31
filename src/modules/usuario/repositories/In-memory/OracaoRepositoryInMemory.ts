import { ICreateOracaoDTO } from "@modules/usuario/dtos/ICreateOracaoDTO";
import { Oracao } from "@modules/usuario/infra/typeorm/entities/Oracao";

import { IOracaoRepository } from "../IOracaoRepository";

class OracaoRepositoryInMemory implements IOracaoRepository {
    oracoes: Oracao[] = [];

    async create({
        livro,
        capitulo,
        versiculo,
        texto,
        id,
    }: ICreateOracaoDTO): Promise<Oracao> {
        const oracao = new Oracao();

        Object.assign(oracao, { livro, capitulo, versiculo, texto, id });

        this.oracoes.push(oracao);

        return oracao;
    }
    async findById(id: string): Promise<Oracao> {
        return this.oracoes.find((oracao) => oracao.id === id);
    }
    async list(): Promise<Oracao[]> {
        const oracoesAll = this.oracoes;
        return oracoesAll;
    }
}

export { OracaoRepositoryInMemory };

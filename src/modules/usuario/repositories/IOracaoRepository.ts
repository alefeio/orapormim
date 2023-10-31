import { ICreateOracaoDTO } from "../dtos/ICreateOracaoDTO";
import { Oracao } from "../infra/typeorm/entities/Oracao";

interface IOracaoRepository {
    create({
        livro,
        capitulo,
        versiculo,
        texto,
    }: ICreateOracaoDTO): Promise<Oracao>;

    findById(id: string): Promise<Oracao>;
    list(): Promise<Oracao[]>;
}

export { IOracaoRepository };

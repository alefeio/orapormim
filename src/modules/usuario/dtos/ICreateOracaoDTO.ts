import { Usuario } from "../infra/typeorm/entities/Usuario";

interface ICreateOracaoDTO {
    livro: string;
    capitulo: number;
    versiculo: string;
    texto: string;
    usuarios?: Usuario[];
    id?: string;
}

export { ICreateOracaoDTO };

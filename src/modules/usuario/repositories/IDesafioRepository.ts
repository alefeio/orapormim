import { Desafio } from "../infra/typeorm/entities/Desafio";

interface ICreateDesafioDTO {
    nome: string;
    descricao?: string;
    foto?: string;
}

interface IDesafioRepository {
    create(data: ICreateDesafioDTO): Promise<Desafio>;
    findByName(nome: string): Promise<Desafio>;
    list(): Promise<Desafio[]>;
    findDesafioEmCurso(): Promise<Desafio>;
    findDesafioIniciado(id: string): Promise<Desafio>;
    startDesafio(id: string): Promise<void>;
    endDesafio(id: string): Promise<void>;
}

export { IDesafioRepository, ICreateDesafioDTO };

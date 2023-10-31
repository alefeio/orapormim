import { Biblia } from "../infra/typeorm/entities/Biblia";

interface ICreateBibliaDTO {
    testamento: string;
    livro: string;
    capitulo: number;
    versiculo: number;
    texto: string;
}

interface IBibliaRepository {
    findByTexto(
        testamento: string,
        livro: string,
        capitulo: number,
        versiculo: number
    ): Biblia;
    list(): Biblia[];
    create({
        testamento,
        livro,
        capitulo,
        versiculo,
        texto,
    }: ICreateBibliaDTO): void;
}

export { IBibliaRepository, ICreateBibliaDTO };

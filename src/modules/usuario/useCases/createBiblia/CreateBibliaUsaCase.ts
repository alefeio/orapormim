import { IBibliaRepository } from "@modules/usuario/repositories/IBibliaRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    testamento: string;
    livro: string;
    capitulo: number;
    versiculo: number;
    texto: string;
}

class CreateBibliaUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private bibliaRepository: IBibliaRepository) { }

    execute({ testamento, livro, capitulo, versiculo, texto }: IRequest): void {
        const bibliaExiste = this.bibliaRepository.findByTexto(
            testamento,
            livro,
            capitulo,
            versiculo
        );

        if (bibliaExiste) {
            throw new AppError("Este registro já existe");
        }

        this.bibliaRepository.create({
            testamento,
            livro,
            capitulo,
            versiculo,
            texto,
        });
    }
}

export { CreateBibliaUseCase };

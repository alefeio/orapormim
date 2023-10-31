import {
    IBibliaRepository,
    ICreateBibliaDTO,
} from "@modules/usuario/repositories/IBibliaRepository";

import { Biblia } from "../entities/Biblia";

class BibliaRepository implements IBibliaRepository {
    private biblia: Biblia[];

    private static INSTANCE: BibliaRepository;

    private constructor() {
        this.biblia = [];
    }

    public static getInstance(): BibliaRepository {
        if (!BibliaRepository.INSTANCE) {
            BibliaRepository.INSTANCE = new BibliaRepository();
        }
        return BibliaRepository.INSTANCE;
    }

    create({
        testamento,
        livro,
        capitulo,
        versiculo,
        texto,
    }: ICreateBibliaDTO): void {
        const biblia = new Biblia();

        Object.assign(biblia, {
            testamento,
            livro,
            capitulo,
            versiculo,
            texto,
            created_at: new Date(),
        });

        this.biblia.push(biblia);
    }

    list(): Biblia[] {
        return this.biblia;
    }

    findByTexto(
        testamento: string,
        livro: string,
        capitulo: number,
        versiculo: number
    ): Biblia {
        const biblia = this.biblia.find(
            (biblia) =>
                biblia.testamento === testamento &&
                biblia.livro === livro &&
                biblia.capitulo === capitulo &&
                biblia.versiculo === versiculo
        );

        return biblia;
    }
}

export { BibliaRepository };

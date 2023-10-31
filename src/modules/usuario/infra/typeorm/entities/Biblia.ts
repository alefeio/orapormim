import { v4 as uuidV4 } from "uuid";

class Biblia {
    id?: string;
    testamento: string;
    livro: string;
    capitulo: number;
    versiculo: number;
    texto: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Biblia };

import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { BibliaRepository } from "@modules/usuario/infra/typeorm/repositories/BibliaRepository";

interface IImportBiblia {
    testamento: string;
    livro: string;
    capitulo: number;
    versiculo: number;
    texto: string;
}

class ImportBibliaUseCase {
    constructor(private bibliaRepository: BibliaRepository) {
        // null
    }

    loadBiblia(file: Express.Multer.File): Promise<IImportBiblia[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const biblia: IImportBiblia[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [testamento, livro, capitulo, versiculo, texto] =
                        line;
                    biblia.push({
                        testamento,
                        livro,
                        capitulo,
                        versiculo,
                        texto,
                    });
                })
                .on("end", () => {
                    resolve(biblia);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const biblia = await this.loadBiblia(file);
    }
}

export { ImportBibliaUseCase };

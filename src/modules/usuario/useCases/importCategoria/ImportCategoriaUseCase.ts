import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { CategoriaRepository } from "@modules/usuario/infra/typeorm/repositories/CategoriaRepository";

@injectable()
class ImportCategoriaUseCase {
    constructor(
        @inject("CategoriaRepository")
        private categoriaRepository: CategoriaRepository
    ) {
        // null
    }

    loadCategoria(file: Express.Multer.File): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categorias: string[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [nome] = line;
                    categorias.push(nome);
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categorias);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categorias = await this.loadCategoria(file);

        categorias.map(async (categoria) => {
            const categoriaExiste = await this.categoriaRepository.findByName(
                categoria
            );

            if (!categoriaExiste) {
                await this.categoriaRepository.create({ nome: categoria });
            }
        });
    }
}

export { ImportCategoriaUseCase };

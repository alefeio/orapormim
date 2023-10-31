import { BibliaRepository } from "../../infra/typeorm/repositories/BibliaRepository";
import { ImportBibliaController } from "./ImportBibliaController";
import { ImportBibliaUseCase } from "./ImportBibliaUseCase";

const bibliaRepository = BibliaRepository.getInstance();
const importBibliaUseCase = new ImportBibliaUseCase(bibliaRepository);
const importBibliaController = new ImportBibliaController(importBibliaUseCase);

export { importBibliaController };

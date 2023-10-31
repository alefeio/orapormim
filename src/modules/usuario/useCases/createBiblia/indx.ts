import { BibliaRepository } from "../../infra/typeorm/repositories/BibliaRepository";
import { CreateBibliaController } from "./CreateBibliaController";
import { CreateBibliaUseCase } from "./CreateBibliaUsaCase";

const bibliaRepository = BibliaRepository.getInstance();

const createBibliaUseCase = new CreateBibliaUseCase(bibliaRepository);

const createBibliaController = new CreateBibliaController(createBibliaUseCase);

export { createBibliaController };

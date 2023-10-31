import { ListBibliaController } from "./ListBibliaController";
import { ListBibliaUseCase } from "./ListBibliaUseCase";

const listBibliaUseCase = new ListBibliaUseCase();
const listBibliaController = new ListBibliaController(listBibliaUseCase);

export { listBibliaController };

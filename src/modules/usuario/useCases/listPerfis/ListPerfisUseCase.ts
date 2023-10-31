import { inject, injectable } from "tsyringe";

import { Perfil } from "@modules/usuario/infra/typeorm/entities/Perfil";
import { IPerfilRepository } from "@modules/usuario/repositories/IPerfilRepository";

@injectable()
class ListPerfilUseCase {
    constructor(
        @inject("PerfilRepository")
        private perfilRepository: IPerfilRepository
    ) {
        // null
    }

    async execute(): Promise<Perfil[]> {
        const perfis = await this.perfilRepository.list();

        return perfis;
    }
}

export { ListPerfilUseCase };

import { inject, injectable } from "tsyringe";

import { Oracao } from "@modules/usuario/infra/typeorm/entities/Oracao";
import { IOracaoRepository } from "@modules/usuario/repositories/IOracaoRepository";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    oracao_id: string;
    usuarios_id: string[];
}

@injectable()
class CreateUsuarioOracaoUseCase {
    constructor(
        @inject("OracaoRepository")
        private oracaoRepository: IOracaoRepository,

        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute({ oracao_id, usuarios_id }: IRequest): Promise<Oracao> {
        const oracaoExiste = await this.oracaoRepository.findById(oracao_id);

        if (!oracaoExiste) {
            throw new AppError("A oração não existe!");
        }

        const usuariosNaOracao = await this.usuarioRepository.findByOracao(
            oracao_id
        );

        usuarios_id.map(async (usuario) => {
            const repetido = usuariosNaOracao.filter((uo) => uo.id === usuario);

            if (!repetido.length && usuariosNaOracao.length < 3) {
                usuariosNaOracao.push({
                    id: usuario,
                });
            }
        });

        const usuarios = await this.usuarioRepository.findByIds(
            usuariosNaOracao.map((uo) => uo.id)
        );

        oracaoExiste.usuarios = usuarios;

        await this.oracaoRepository.create(oracaoExiste);

        return oracaoExiste;
    }
}

export { CreateUsuarioOracaoUseCase };

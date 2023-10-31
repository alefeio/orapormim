import { inject, injectable } from "tsyringe";

import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { deleteFile } from "@utils/file";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUsuarioAvatarUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {
        // null
    }

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const usuario = await this.usuarioRepository.findById(user_id);

        if (usuario.avatar) {
            await deleteFile(`./tmp/avatar/${usuario.avatar}`);
        }
        usuario.avatar = avatar_file;

        await this.usuarioRepository.create(usuario);
    }
}

export { UpdateUsuarioAvatarUseCase };

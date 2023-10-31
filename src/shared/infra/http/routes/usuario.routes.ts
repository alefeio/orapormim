import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUsuarioController } from "@modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { UpdateUsuarioAvatarController } from "@modules/usuario/useCases/updateUsuarioAvatar/UpdateUsuarioAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usuarioRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsuarioController = new CreateUsuarioController();
const updateUsuarioAvatarController = new UpdateUsuarioAvatarController();

usuarioRoutes.post("/", createUsuarioController.handle);

usuarioRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUsuarioAvatarController.handle
);

export { usuarioRoutes };

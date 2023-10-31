import { ICreateUsuarioDTO } from "@modules/usuario/dtos/ICreateUsuarioDTO";
import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/In-memory/UsuarioRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUsuarioUseCase } from "../createUsuario/CreateUsuarioUseCase";
import { AuthenticateUsuarioUseCase } from "./AuthenticateUsuarioUseCase";

let authenticateUsuarioUseCase: AuthenticateUsuarioUseCase;
let usuarioRepositoryInMemory: UsuarioRepositoryInMemory;
let createUsuarioUseCase: CreateUsuarioUseCase;

describe("Autenticação de usuário", () => {
    beforeEach(() => {
        usuarioRepositoryInMemory = new UsuarioRepositoryInMemory();
        authenticateUsuarioUseCase = new AuthenticateUsuarioUseCase(
            usuarioRepositoryInMemory
        );
        createUsuarioUseCase = new CreateUsuarioUseCase(
            usuarioRepositoryInMemory
        );
    });

    it("Deve ser capaz de autenticar um usuário", async () => {
        const usuario: ICreateUsuarioDTO = {
            nome: "Fulano",
            password: "123456",
            email: "fulano@email.com",
            celular: "91984038557",
            pix: "fulano@email.com",
        };
        await createUsuarioUseCase.execute(usuario);

        const result = await authenticateUsuarioUseCase.execute({
            email: usuario.email,
            password: usuario.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("Não deve autenticar se o usuário não existir", () => {
        expect(async () => {
            await authenticateUsuarioUseCase.execute({
                email: "emailfalso@email.com",
                password: "1234",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Não deve autenticar caso a senha esteja incorreta", () => {
        expect(async () => {
            const usuario: ICreateUsuarioDTO = {
                nome: "Fulano",
                password: "123456",
                email: "fulano@email.com",
                celular: "91984038557",
                pix: "fulano@email.com",
            };
            await createUsuarioUseCase.execute(usuario);

            await authenticateUsuarioUseCase.execute({
                email: usuario.email,
                password: "1234",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});

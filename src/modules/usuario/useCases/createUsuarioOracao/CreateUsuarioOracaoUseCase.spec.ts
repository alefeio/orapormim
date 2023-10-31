import { OracaoRepositoryInMemory } from "@modules/usuario/repositories/In-memory/OracaoRepositoryInMemory";
import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/In-memory/UsuarioRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateOracaoUseCase } from "../createOracao/CreateOracaoUseCase";
import { ListBibliaUseCase } from "../listBiblia/ListBibliaUseCase";
import { CreateUsuarioOracaoUseCase } from "./CreateUsuarioOracaoUseCase";

// let createUsuarioOracaoUseCase: CreateUsuarioOracaoUseCase;
// let oracaoRepositoryInMemory: OracaoRepositoryInMemory;
// let createOracaoUseCase: CreateOracaoUseCase;
// let usuarioRepositoryInMemory: UsuarioRepositoryInMemory;

// describe("Inserir usuário na oração", () => {
//     beforeEach(() => {
//         oracaoRepositoryInMemory = new OracaoRepositoryInMemory();
//         usuarioRepositoryInMemory = new UsuarioRepositoryInMemory();
//         createOracaoUseCase = new CreateOracaoUseCase(oracaoRepositoryInMemory);
//         createUsuarioOracaoUseCase = new CreateUsuarioOracaoUseCase(
//             oracaoRepositoryInMemory,
//             usuarioRepositoryInMemory
//         );
//     });

//     it("Não deve poder inserir até usuários em uma oração não existente", async () => {
//         expect(async () => {
//             const usuarios_id = ["4321", "5432"];
//             const oracao_id = "1234";
//             await createUsuarioOracaoUseCase.execute({
//                 oracao_id,
//                 usuarios_id,
//             });
//         }).rejects.toBeInstanceOf(AppError);
//     });

//     it("Deve poder inserir até 3 usuários em uma oração", async () => {
//         const biblia = new ListBibliaUseCase();
//         const randomBiblia = await biblia.versosRandom({ versao: "nvi" });
//         const oracao = await createOracaoUseCase.execute(randomBiblia);

//         const usuario = await usuarioRepositoryInMemory.create({
//             nome: "Fulano 2",
//             password: "123456",
//             email: "fulano2@gmail.com",
//             celular: "91985014093",
//             pix: "91985014093",
//         });

//         const usuario2 = await usuarioRepositoryInMemory.create({
//             nome: "Fulano 3",
//             password: "123456",
//             email: "fulano2@gmail.com",
//             celular: "91985014093",
//             pix: "91985014093",
//         });

//         const usuarios_id = [usuario.id, usuario2.id];

//         const usuarioOracao = await createUsuarioOracaoUseCase.execute({
//             oracao_id: oracao.id,
//             usuarios_id,
//         });

//         expect(usuarioOracao).toHaveProperty("usuarios");
//         expect(usuarioOracao.usuarios.length).toBe(2);
//     });
// });

import { container } from "tsyringe";

import { CategoriaRepository } from "@modules/usuario/infra/typeorm/repositories/CategoriaRepository";
import { DesafioRepository } from "@modules/usuario/infra/typeorm/repositories/DesafioRepository";
import { ImagensPortfolioRepository } from "@modules/usuario/infra/typeorm/repositories/ImagensPortfolioRepository";
import { OpcaoQuizRepository } from "@modules/usuario/infra/typeorm/repositories/OpcaoQuizRepository";
import { OracaoRepository } from "@modules/usuario/infra/typeorm/repositories/OracaoRepository";
import { PedidoOracaoRepository } from "@modules/usuario/infra/typeorm/repositories/PedidoOracaoRepository";
import { PerfilRepository } from "@modules/usuario/infra/typeorm/repositories/PerfilRepository";
import { PortfolioRepository } from "@modules/usuario/infra/typeorm/repositories/PortfolioRepository";
import { PropositoRepository } from "@modules/usuario/infra/typeorm/repositories/PropositoRepository";
import { QuizRepository } from "@modules/usuario/infra/typeorm/repositories/QuizRepository";
import { RespostaQuizRepository } from "@modules/usuario/infra/typeorm/repositories/RespostaQuizRepository";
import { UsuarioRepository } from "@modules/usuario/infra/typeorm/repositories/UsuarioRepository";
import { ICategoriaRepository } from "@modules/usuario/repositories/ICategoriaRepository";
import { IDesafioRepository } from "@modules/usuario/repositories/IDesafioRepository";
import { IOpcaoQuizRepository } from "@modules/usuario/repositories/IOpcaoQuizRepository";
import { IOracaoRepository } from "@modules/usuario/repositories/IOracaoRepository";
import { IPedidoOracaoRepository } from "@modules/usuario/repositories/IPedidoOracaoRepository";
import { IPerfilRepository } from "@modules/usuario/repositories/IPerfilRepository";
import { IPortfolioRepository } from "@modules/usuario/repositories/IPortfolioRepository";
import { IPropositoRepository } from "@modules/usuario/repositories/IPropositoRepository";
import { IQuizRepository } from "@modules/usuario/repositories/IQuizRepository";
import { IRespostaQuizRepository } from "@modules/usuario/repositories/IRespostaQuizRepository";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";

import { IDateProvider } from "./provider/DateProvider/IDateProvider";
import { DayjsDateProvider } from "./provider/DateProvider/implamentations/DayjsDateProvider";

container.registerSingleton<ICategoriaRepository>(
    "CategoriaRepository",
    CategoriaRepository
);

container.registerSingleton<IPerfilRepository>(
    "PerfilRepository",
    PerfilRepository
);

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
);

container.registerSingleton<IPedidoOracaoRepository>(
    "PedidoOracaoRepository",
    PedidoOracaoRepository
);

container.registerSingleton<IPropositoRepository>(
    "PropositoRepository",
    PropositoRepository
);

container.registerSingleton<IOracaoRepository>(
    "OracaoRepository",
    OracaoRepository
);

container.registerSingleton<IPortfolioRepository>(
    "PortfolioRepository",
    PortfolioRepository
);

container.registerSingleton<ImagensPortfolioRepository>(
    "ImagensPortfolioRepository",
    ImagensPortfolioRepository
);

container.registerSingleton<IDesafioRepository>(
    "DesafioRepository",
    DesafioRepository
);

container.registerSingleton<IQuizRepository>("QuizRepository", QuizRepository);

container.registerSingleton<IOpcaoQuizRepository>(
    "OpcaoQuizRepository",
    OpcaoQuizRepository
);

container.registerSingleton<IRespostaQuizRepository>(
    "RespostaQuizRepository",
    RespostaQuizRepository
);

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);

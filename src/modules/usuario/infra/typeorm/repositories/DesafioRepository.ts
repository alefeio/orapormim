import dayjs from "dayjs";
import { Repository, getRepository } from "typeorm";

import {
    ICreateDesafioDTO,
    IDesafioRepository,
} from "@modules/usuario/repositories/IDesafioRepository";

import { Desafio } from "../entities/Desafio";

class DesafioRepository implements IDesafioRepository {
    private repository: Repository<Desafio>;

    private dateNow = dayjs().utc().local().format();

    constructor() {
        this.repository = getRepository(Desafio);
    }

    async create({
        nome,
        descricao,
        foto,
    }: ICreateDesafioDTO): Promise<Desafio> {
        const desafio = this.repository.create({ nome, descricao, foto });

        await this.repository.save(desafio);

        return desafio;
    }
    async findByName(nome: string): Promise<Desafio> {
        const desafio = await this.repository.findOne({ nome });

        return desafio;
    }
    list(): Promise<Desafio[]> {
        const desafios = this.repository.find();

        return desafios;
    }
    async findDesafioEmCurso(): Promise<Desafio> {
        const desafioQuery = this.repository
            .createQueryBuilder()
            .where("start_date IS NOT NULL")
            .andWhere("end_date IS NULL")
            .limit(1);

        const desafio = await desafioQuery.getOne();

        return desafio;
    }
    async findDesafioIniciado(id: string): Promise<Desafio> {
        const desafioQuery = this.repository
            .createQueryBuilder()
            .where("id = :id")
            .andWhere("start_date IS NULL")
            .setParameters({ id })
            .limit(1);

        const desafio = await desafioQuery.getOne();

        return desafio;
    }
    async startDesafio(id: string): Promise<void> {
        const start_date = this.dateNow;

        await this.repository
            .createQueryBuilder()
            .update()
            .set({ start_date })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }
    async endDesafio(id: string): Promise<void> {
        const end_date = this.dateNow;

        await this.repository
            .createQueryBuilder()
            .update()
            .set({ end_date })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }
}

export { DesafioRepository };

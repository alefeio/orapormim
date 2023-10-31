import { ICreatePropositoDTO } from "../dtos/ICreatePropositoDTO";
import { Proposito } from "../infra/typeorm/entities/Proposito";

interface IPropositoRepository {
    create(data: ICreatePropositoDTO): Promise<Proposito>;
    findAll(id: string): Promise<Proposito[]>;
}

export { IPropositoRepository };

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("desafio")
class Desafio {
    @PrimaryColumn()
    id?: string;

    @Column()
    nome: string;

    @Column()
    descricao?: string;

    @Column()
    foto?: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Desafio };

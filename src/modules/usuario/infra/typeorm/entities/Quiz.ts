import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Desafio } from "./Desafio";

@Entity("quiz")
class Quiz {
    @PrimaryColumn()
    id: string;

    @Column()
    pergunta: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Desafio)
    @JoinColumn({ name: "desafio_id" })
    desafio: Desafio;

    @Column()
    desafio_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Quiz };

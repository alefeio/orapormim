import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Usuario } from "./Usuario";

@Entity("oracao")
class Oracao {
    @PrimaryColumn()
    id: string;

    @Column()
    versiculo: string;

    @Column()
    concluido: boolean;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    livro: string;

    @Column()
    capitulo: number;

    @Column()
    texto: string;

    @ManyToMany(() => Usuario)
    @JoinTable({
        name: "usuario_oracao",
        joinColumns: [{ name: "oracao_id" }],
        inverseJoinColumns: [{ name: "usuario_id" }],
    })
    usuarios: Usuario[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Oracao };

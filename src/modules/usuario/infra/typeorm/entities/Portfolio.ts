import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Usuario } from "./Usuario";

@Entity("portfolio")
class Portfolio {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

    @Column()
    usuario_id: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    ativo: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Portfolio };

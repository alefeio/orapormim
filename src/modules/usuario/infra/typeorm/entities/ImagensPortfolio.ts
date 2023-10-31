import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Portfolio } from "./Portfolio";

@Entity("imagens_portfolio")
class ImagensPortfolio {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Portfolio)
    @JoinColumn({ name: "portfolio_id" })
    portfolio: Portfolio;

    @Column()
    portfolio_id: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    nome: string;

    @Column()
    ativo: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { ImagensPortfolio };

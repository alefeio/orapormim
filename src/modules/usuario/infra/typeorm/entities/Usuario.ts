import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Categoria } from "./Categoria";
import { Perfil } from "./Perfil";

@Entity("usuario")
class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    celular: string;

    @Column()
    pix: string;

    @Column()
    isAdmin: boolean;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    profissao: string;

    @Column()
    linkedin: string;

    @Column()
    github: string;

    @Column()
    instagram: string;

    @Column()
    facebook: string;

    @Column()
    site: string;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "categoria_id" })
    categoria: Categoria;

    @Column()
    categoria_id: string;

    @ManyToOne(() => Perfil)
    @JoinColumn({ name: "perfil_id" })
    perfil: Perfil;

    @Column()
    perfil_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Usuario };

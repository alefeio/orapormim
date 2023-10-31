import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Quiz } from "./Quiz";
import { Usuario } from "./Usuario";

@Entity("resposta_quiz")
class RespostaQuiz {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Quiz)
    @JoinColumn({ name: "quiz_id" })
    quiz: Quiz;

    @Column()
    quiz_id: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

    @Column()
    usuario_id: string;

    @Column()
    pontuacao: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { RespostaQuiz };

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

@Entity("opcao_quiz")
class OpcaoQuiz {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Quiz)
    @JoinColumn({ name: "quiz_id" })
    quiz: Quiz;

    @Column()
    quiz_id: string;

    @Column()
    resposta: string;

    @Column()
    correta: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { OpcaoQuiz };

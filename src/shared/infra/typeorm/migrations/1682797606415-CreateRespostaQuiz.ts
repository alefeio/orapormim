import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRespostaQuiz1682797606415 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "resposta_quiz",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "quiz_id",
                        type: "uuid",
                    },
                    {
                        name: "usuario_id",
                        type: "uuid",
                    },
                    {
                        name: "pontuacao",
                        type: "numeric",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKQuiz",
                        referencedTableName: "quiz",
                        referencedColumnNames: ["id"],
                        columnNames: ["quiz_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["id"],
                        columnNames: ["usuario_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("resposta_quiz");
    }
}

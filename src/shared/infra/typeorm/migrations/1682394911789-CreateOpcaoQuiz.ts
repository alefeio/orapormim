import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOpcaoQuiz1682394911789 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "opcao_quiz",
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
                        name: "resposta",
                        type: "varchar",
                    },
                    {
                        name: "correta",
                        type: "boolean",
                    },
                    {
                        name: "created_at",
                        type: "Date",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("opcao_quiz");
    }
}

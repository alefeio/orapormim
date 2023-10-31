import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterQuizAddConcluido1682898862115 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "quiz",
            new TableColumn({
                name: "concluido",
                type: "boolean",
                default: false,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("quiz", "concluido");
    }
}

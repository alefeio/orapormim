import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterQuizAddDesafioId1682531846340 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "quiz",
            new TableColumn({
                name: "desafio_id",
                type: "uuid",
                isNullable: true,
            })
        );

        await queryRunner.query(
            "ALTER TABLE quiz ADD FOREIGN KEY (desafio_id) REFERENCES desafio(id)",
            []
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("quiz", "desafio_id");
    }
}

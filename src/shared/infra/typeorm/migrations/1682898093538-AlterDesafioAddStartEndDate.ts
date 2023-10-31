import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterDesafioAddStartEndDate1682898093538
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("desafio", [
            new TableColumn({
                name: "start_date",
                type: "timestamp",
                isNullable: true,
            }),
            new TableColumn({
                name: "end_date",
                type: "timestamp",
                isNullable: true,
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("desafio", ["start_date", "end_date"]);
    }
}

import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterOracaoAddUpdatedAt1682798979718
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "oracao",
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                default: "now()",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("oracao", "updated_at");
    }
}

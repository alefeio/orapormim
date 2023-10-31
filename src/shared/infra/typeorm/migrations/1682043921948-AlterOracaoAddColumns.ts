import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterOracaoAddColumns1682043921948 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "oracao",
            new TableColumn({
                name: "livro",
                type: "varchar",
            })
        );
        await queryRunner.addColumn(
            "oracao",
            new TableColumn({
                name: "capitulo",
                type: "numeric",
            })
        );
        await queryRunner.addColumn(
            "oracao",
            new TableColumn({
                name: "texto",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("oracao", "livro");
        await queryRunner.dropColumn("oracao", "capitulo");
        await queryRunner.dropColumn("oracao", "versiculo");
        await queryRunner.dropColumn("oracao", "texto");
    }
}

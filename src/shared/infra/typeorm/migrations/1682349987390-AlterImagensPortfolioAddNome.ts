import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterImagensPortfolioAddNome1682349987390
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "imagens_portfolio",
            new TableColumn({
                name: "nome",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("imagens_portfolio", "nome");
    }
}

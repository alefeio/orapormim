import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterImagensPortfolioAddAtivo1682350187714
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "imagens_portfolio",
            new TableColumn({
                name: "ativo",
                type: "boolean",
                default: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("imagens_portfolio", "ativo");
    }
}

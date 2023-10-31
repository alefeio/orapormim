import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterPortfolioAddAtivo1682341468706 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "portfolio",
            new TableColumn({
                name: "ativo",
                type: "boolean",
                default: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("portfolio", "ativo");
    }
}

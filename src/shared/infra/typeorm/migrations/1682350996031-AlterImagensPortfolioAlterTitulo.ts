import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterImagensPortfolioAlterTitulo1682350996031
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE imagens_portfolio ALTER COLUMN titulo DROP NOT NULL",
            []
        );
        await queryRunner.query(
            "ALTER TABLE imagens_portfolio ALTER COLUMN descricao DROP NOT NULL",
            []
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("imagens_portfolio", "titulo");
        await queryRunner.dropColumn("imagens_portfolio", "descricao");
    }
}

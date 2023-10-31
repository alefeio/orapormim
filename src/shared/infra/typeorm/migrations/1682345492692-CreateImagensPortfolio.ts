import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateImagensPortfolio1682345492692 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "imagens_portfolio",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "portfolio_id", type: "uuid" },
                    { name: "titulo", type: "varchar" },
                    { name: "descricao", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
                foreignKeys: [
                    {
                        name: "FKImagensPortfolio",
                        referencedTableName: "portfolio",
                        referencedColumnNames: ["id"],
                        columnNames: ["portfolio_id"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("imagens_portfolio");
    }
}

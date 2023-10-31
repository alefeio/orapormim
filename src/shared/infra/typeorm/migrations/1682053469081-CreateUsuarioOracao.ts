import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateUsuarioOracao1682053469081 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario_oracao",
                columns: [
                    {
                        name: "usuario_id",
                        type: "uuid",
                    },
                    {
                        name: "oracao_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "usuario_oracao",
            new TableForeignKey({
                name: "FKUsuarioOracao",
                referencedTableName: "usuario",
                referencedColumnNames: ["id"],
                columnNames: ["usuario_id"],
                onDelete: "CASCADE",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "usuario_oracao",
            new TableForeignKey({
                name: "FKOracaoUsuario",
                referencedTableName: "oracao",
                referencedColumnNames: ["id"],
                columnNames: ["oracao_id"],
                onDelete: "CASCADE",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("usuario_oracao", "FKOracaoUsuario");
        await queryRunner.dropForeignKey("usuario_oracao", "FKUsuarioOracao");
        await queryRunner.dropTable("usuario_oracao");
    }
}

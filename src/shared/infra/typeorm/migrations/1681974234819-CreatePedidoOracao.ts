import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePedidoOracao1681850435709 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pedido_oracao",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "usuario_id",
                        type: "uuid",
                    },
                    {
                        name: "pedido",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["id"],
                        columnNames: ["usuario_id"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedido_oracao");
    }
}

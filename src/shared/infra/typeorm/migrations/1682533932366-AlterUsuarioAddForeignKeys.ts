import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUsuarioAddForeignKeys1682533932366
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "categoria_id",
                type: "uuid",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "perfil_id",
                type: "uuid",
                isNullable: true,
            })
        );

        await queryRunner.query(
            "ALTER TABLE usuario ADD FOREIGN KEY (categoria_id) REFERENCES categoria(id)",
            []
        );
        await queryRunner.query(
            "ALTER TABLE usuario ADD FOREIGN KEY (perfil_id) REFERENCES perfil(id)",
            []
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("quiz", "desafio_id");
    }
}

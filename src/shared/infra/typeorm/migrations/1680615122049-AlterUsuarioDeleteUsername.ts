import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUsuarioDeleteUsername1680615122049
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuario", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({ name: "username", type: "varchar" })
        );
    }
}

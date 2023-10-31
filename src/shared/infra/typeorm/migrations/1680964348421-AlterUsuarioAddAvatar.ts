import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUsuarioAddAvatar1680964348421 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "avatar",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuario", "avatar");
    }
}

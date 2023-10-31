import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUsuarioAddColumns1681974804270 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "profissao",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "linkedin",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "github",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "instagram",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "facebook",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "usuario",
            new TableColumn({
                name: "site",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuario", "profissao");
        await queryRunner.dropColumn("usuario", "linkedin");
        await queryRunner.dropColumn("usuario", "github");
        await queryRunner.dropColumn("usuario", "instagram");
        await queryRunner.dropColumn("usuario", "facebook");
        await queryRunner.dropColumn("usuario", "site");
    }
}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCollectionPoints1626875301485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "collection_points",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "id_clients",
                        type: "uuid",

                    },
                    {
                        name: "id_cupons",
                        type: "uuid",
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "waste_list",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKClientId",
                        referencedTableName: "clients",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_clients"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKCuponId",
                        referencedTableName: "cupons",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_cupons"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("collection_points");
    }

}

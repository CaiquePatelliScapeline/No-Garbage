import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdvertising1626876748697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "advertising",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "id_clients",
                        type: "uuid",
                    },
                    {
                        name: "id_plans",
                        type: "uuid",
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                    },
                    {
                        name: "advertiser_url",
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
                    {
                        name: "ends_at",
                        type: "timestamp",
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
                        name: "FKPlanId",
                        referencedTableName: "plans",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_plans"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("advertising");
    }

}

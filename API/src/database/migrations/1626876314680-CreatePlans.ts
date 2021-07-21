import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlans1626876314680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "plans",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "plan",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "real",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("plans");
    }

}

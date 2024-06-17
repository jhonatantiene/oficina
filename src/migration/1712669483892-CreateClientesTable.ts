import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientesTable1712669483892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            length: "64",
            isNullable: false,
          },
          {
            name: "telefone",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "telefone2",
            type: "varchar",
            length: "20",
            isNullable: true,
          },
          {
            name: "endereco",
            type: "varchar",
            length: "64",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS clientes`);
  }
}

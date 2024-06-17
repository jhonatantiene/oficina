import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVendasTable1712673351670 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "venda",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "data_venda",
            type: "varchar",
            length: "64",
            isNullable: false,
          },
          {
            name: "qtd_venda",
            type: "int",
            isNullable: false,
          },

          {
            name: "peca_vendida",
            type: "int",
            isNullable: false,
          },

          {
            name: "preco",
            type: "varchar",
            length: "10",
            isNullable: false,
          },
          {
            name: "cliente",
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
    await queryRunner.query(`DROP TABLE IF EXISTS vendas`);
  }
}

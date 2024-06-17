import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstoqueTable1712674475163 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "estoque",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome_peca",
            type: "varchar",
            length: "64",
            isNullable: false,
          },
          {
            name: "modelo",
            type: "varchar",
            length: "64",
            isNullable: false,
          },
          {
            name: "data_compra",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "preco_peca",
            type: "varchar",
            length: "10",
            isNullable: false,
          },
          {
            name: "qtd",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS estoque`);
  }
}

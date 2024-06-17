import { DataSource } from "typeorm";
import { CreateClientesTable1712669483892 } from "./migration/1712669483892-CreateClientesTable";
import { CreateVendasTable1712673351670 } from "./migration/1712673351670-createVendasTable";
import { CreateEstoqueTable1712674475163 } from "./migration/1712674475163-createEstoqueTable";
import { Notificacoes1716995723487 } from "./migration/1716995723487-notificacoes";
import { Clientes } from "./entity/Clientes";
import { Estoque } from "./entity/Estoque";
import { Venda } from "./entity/Venda";
import { Notificacoes } from "./entity/Notificacoes";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "oficina",
  synchronize: true,
  logging: false,
  entities: [Clientes, Estoque, Venda,  Notificacoes],
  migrations: [
    CreateClientesTable1712669483892,
    CreateVendasTable1712673351670,
    CreateEstoqueTable1712674475163,
    Notificacoes1716995723487
  ],
  subscribers: [],
});

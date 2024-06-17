import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Venda } from "../entity/Venda";

export class VendasController {
  async create(request: Request, response: Response) {
    // Cria uma nova instância da entidade Clientes
    const venda = new Venda();
    venda.data_venda = request.body.data_venda;
    venda.qtd_venda = request.body.qtd_venda;
    venda.preco = request.body.preco;
    venda.cliente = request.body.cliente;
    venda.peca_vendida = request.body.peca_vendida;

    console.log(venda)
    // Salva a instância da entidade no banco de dados
    const entityManager = AppDataSource.manager;
    console.log(await entityManager.save(venda));
    return [
      {
        mesage: "Venda cadastrada com sucesso!",
        code: 201,
      },
    ];
  }

  async read(request: Request, response: Response) {
    // Extrai o ano da query string, se presente
    const ano = request.query.ano as string | undefined;
  
    const repositorio = AppDataSource.manager.connection.getRepository(Venda);
  
    // Se um ano foi fornecido, filtra as vendas por esse ano
    let vendas: Venda[];
    if (ano) {
      vendas = await repositorio.createQueryBuilder('venda')
        .where('YEAR(venda.data_venda) = :ano', { ano })
        .getMany();
    } else {
      vendas = await repositorio.find();
    }
  
    return { res: vendas };
  }

  async update(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Venda);
    const VendaAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    console.log(request.body)
    repositorio.merge(VendaAtual, request.body);
    await repositorio.save(VendaAtual);
    return [
      {
        res: "venda atualizada com sucesso!",
        code: 200,
      },
    ];
  }

  async delete(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Venda);
    const VendaAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    repositorio.delete(VendaAtual);
    await repositorio.save(VendaAtual);
    return [
      {
        res: "venda deletada com sucesso!",
        code: 200,
      },
    ];
  }
}

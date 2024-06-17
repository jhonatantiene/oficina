import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Estoque } from "../entity/Estoque";

export class PecasController {
  async create(request: Request, response: Response) {
    // Cria uma nova instância da entidade Clientes
    const peca = new Estoque();
    peca.nome_peca = request.body.nome_peca;
    peca.modelo = request.body.modelo;
    peca.preco_peca = request.body.preco_peca;
    peca.data_compra = request.body.data_compra;
    peca.qtd = request.body.qtd;
    peca.alert_estoque = request.body.alert_estoque;

    console.log(request.body)
    // Salva a instância da entidade no banco de dados
    const entityManager = AppDataSource.manager;
    await entityManager.save(peca);
    return [
      {
        mesage: "Peça cadastrado com sucesso!",
        code: 201,
      },
    ];
  }

  async read(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Estoque);
    const estoque = await repositorio.find();
    return { res: estoque };
  }

  async update(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Estoque);
    const pecaAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    console.log(request.body)
    repositorio.merge(pecaAtual, request.body.data);
    await repositorio.save(pecaAtual);
    return [
      {
        res: "peça atualizada com sucesso!",
        code: 200,
      },
    ];
  }

  async delete(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Estoque);
    const pecaAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    repositorio.delete(pecaAtual);
    await repositorio.save(pecaAtual);
    return [
      {
        res: "peça deletada com sucesso!",
        code: 200,
      },
    ];
  }
}

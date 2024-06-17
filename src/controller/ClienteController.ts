import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Clientes } from "../entity/Clientes";

export class ClienteController {
  async create(request: Request, response: Response) {
    // Cria uma nova instância da entidade Clientes
    const novoCliente = new Clientes();
    novoCliente.nome = request.body.nome;
    novoCliente.telefone = request.body.telefone;
    novoCliente.telefone2 = request.body.telefone2;
    novoCliente.endereco = request.body.endereco;

    // Salva a instância da entidade no banco de dados
    const entityManager = AppDataSource.manager;
    await entityManager.save(novoCliente);
    return [
      {
        mesage: "cliente criado com sucesso!",
        code: 201,
      },
    ];
  }

  async read(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Clientes);
    const todosClientes = await repositorio.find();
    return { res: todosClientes };
  }

  async update(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Clientes);
    const clienteAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    repositorio.merge(clienteAtual, request.body.data);
    await repositorio.save(clienteAtual);
    return [
      {
        res: "cliente atualizado com sucesso!",
        code: 200,
      },
    ];
  }

  async delete(request: Request, response: Response) {
    const repositorio =
      AppDataSource.manager.connection.getRepository(Clientes);
    const clienteAtual = await repositorio.findOne({
      where: { id: request.body.id },
    });
    repositorio.delete(clienteAtual);
    await repositorio.save(clienteAtual);
    return [
      {
        res: "cliente deletado com sucesso!",
        code: 200,
      },
    ];
  }
}

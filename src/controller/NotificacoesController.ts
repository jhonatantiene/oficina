import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Notificacoes } from "../entity/Notificacoes";

export class NotificacoesController {
  async read(request: Request, response: Response) {
    const repositorio = AppDataSource.manager.connection.getRepository(Notificacoes);
    const notification = await repositorio.find();
    return { res: notification };
  }

  async create(request: Request, response: Response) {
    // Cria uma nova instância da entidade Notificacoes
    const notification = new Notificacoes();
    notification.assunto = request.body.assunto;

    // Salva a instância da entidade no banco de dados
    const entityManager = AppDataSource.manager;
    await entityManager.save(notification);
    return [
      {
        mesage: "notification gerada com sucesso!",
        code: 201,
      },
    ];
  }
}

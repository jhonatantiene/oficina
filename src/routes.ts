import { ClienteController } from "./controller/ClienteController";
import { PecasController } from "./controller/EstoqueController";
import { NotificacoesController } from "./controller/NotificacoesController";
import { VendasController } from "./controller/VendaController";

export const Routes = [
  //////////////////CLIENTE/////////////////////
  {
    method: "post",
    route: "/cliente/create",
    controller: ClienteController,
    action: "create",
  },
  {
    method: "get",
    route: "/cliente/read",
    controller: ClienteController,
    action: "read",
  },

  {
    method: "put",
    route: "/cliente/update",
    controller: ClienteController,
    action: "update",
  },

  {
    method: "delete",
    route: "/cliente/delete",
    controller: ClienteController,
    action: "delete",
  },

  //////////////////ESTOQUE/////////////////////
  {
    method: "post",
    route: "/peca/create",
    controller: PecasController,
    action: "create",
  },
  {
    method: "get",
    route: "/peca/read",
    controller: PecasController,
    action: "read",
  },

  {
    method: "put",
    route: "/peca/update",
    controller: PecasController,
    action: "update",
  },

  {
    method: "delete",
    route: "/peca/delete",
    controller: PecasController,
    action: "delete",
  },

    //////////////////VENDAS/////////////////////
    {
      method: "post",
      route: "/venda/create",
      controller: VendasController,
      action: "create",
    },
    {
      method: "get",
      route: "/venda/read",
      controller: VendasController,
      action: "read",
    },
  
    {
      method: "put",
      route: "/venda/update",
      controller: VendasController,
      action: "update",
    },
  
    {
      method: "delete",
      route: "/venda/delete",
      controller: VendasController,
      action: "delete",
    },

      //////////////////VENDAS/////////////////////
      {
        method: "post",
        route: "/notificacoes/create",
        controller: NotificacoesController,
        action: "create",
      },

      {
        method: "get",
        route: "/notificacoes/read",
        controller: NotificacoesController,
        action: "read",
      },

];

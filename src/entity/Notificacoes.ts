import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Notificacoes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assunto: string;
}

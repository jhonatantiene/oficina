import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Clientes {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    telefone2: string

    @Column()
    endereco: string
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Venda {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data_venda: string

    @Column()
    qtd_venda: number

    @Column()
    preco: string

    @Column()
    cliente: string

    @Column()
    peca_vendida: string
}

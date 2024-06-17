import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Estoque {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome_peca: string

    @Column()
    modelo: string

    @Column()
    data_compra: string

    @Column()
    preco_peca: string

    @Column()
    qtd: number

    @Column()
    alert_estoque: number
}
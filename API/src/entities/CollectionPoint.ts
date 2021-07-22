import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";
import { Cupon } from "./Cupon";

@Entity("collection_points")
class CollectionPoint {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_clients: string;

    @JoinColumn({name: "id_clients"})
    @ManyToOne(() => Client)
    idClient: Client;

    @Column()
    id_cupons: string;

    @JoinColumn({name: "id_cupons"})
    @OneToOne(() => Cupon)
    idCupon: Cupon;

    @Column()
    image_url: string;

    @Column()
    address: string;

    @Column()
    waste_list: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {CollectionPoint};
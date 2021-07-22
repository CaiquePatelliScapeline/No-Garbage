import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";
import { Plan } from "./Plan";

@Entity("advertising")
class Advertising {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_clients: string;

    @JoinColumn({name: "id_clients"})
    @ManyToOne(() => Client)
    idClient: Client;

    @Column()
    id_plans: string;

    @JoinColumn({name: "id_plans"})
    @ManyToOne(() => Plan)
    idPlan: Plan;

    @Column()
    image_url: string;

    @Column()
    advertiser_url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    ends_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Advertising};
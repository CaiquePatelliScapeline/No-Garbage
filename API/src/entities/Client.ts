import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("clients")
class Client {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    corporate_name: string;

    @Column()
    cnpj: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    responsible: string;

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

export {Client};